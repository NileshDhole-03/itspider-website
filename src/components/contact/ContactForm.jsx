import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Field, Input, Select, Textarea } from '../ui/FormFields'
import { courses } from '../../data/courses'

const initialState = { name: '', phone: '', email: '', course: '', mode: '', message: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) next.phone = 'Enter a valid phone number.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.course) next.course = 'Please select a course.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setTimeout(() => setStatus('success'), 900)
  }

  if (status === 'success') {
    return (
      <div className="card-surface p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 size={36} className="text-accent" />
        <h3 className="font-bold text-lg text-ink-primary">Enquiry Submitted</h3>
        <p className="text-ink-secondary text-sm max-w-sm">
          Thank you for reaching out. Our team will get in touch with you shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-8 flex flex-col gap-5">
      <Field label="Name" required error={errors.name} htmlFor="name">
        <Input id="name" value={form.name} onChange={update('name')} error={errors.name} placeholder="Your full name" />
      </Field>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Phone" required error={errors.phone} htmlFor="phone">
          <Input id="phone" type="tel" value={form.phone} onChange={update('phone')} error={errors.phone} placeholder="+91 00000 00000" />
        </Field>
        <Field label="Email" required error={errors.email} htmlFor="email">
          <Input id="email" type="email" value={form.email} onChange={update('email')} error={errors.email} placeholder="you@example.com" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Interested Course" required error={errors.course} htmlFor="course">
          <Select id="course" value={form.course} onChange={update('course')} error={errors.course}>
            <option value="">Select a course</option>
            {courses.map((c) => (
              <option key={c.id} value={c.title}>{c.title}</option>
            ))}
          </Select>
        </Field>
        <Field label="Preferred Mode" htmlFor="mode">
          <Select id="mode" value={form.mode} onChange={update('mode')}>
            <option value="">Select mode</option>
            <option value="Online">Online</option>
            <option value="Classroom">Classroom</option>
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <Textarea id="message" value={form.message} onChange={update('message')} placeholder="Tell us a bit about your goals..." />
      </Field>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary group mt-2 disabled:opacity-70">
        {status === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
      </button>
    </form>
  )
}

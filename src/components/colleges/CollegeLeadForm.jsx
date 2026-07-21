import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { Field, Input, Select, Textarea } from '../ui/FormFields'

const programOptions = [
  'Technical Training',
  'Placement Preparation',
  'Assessments',
  'Coding Practice',
  'Aptitude Training',
  'Workshop',
  'Complete Placement Program',
  'Other',
]

const initialState = {
  collegeName: '',
  contactPerson: '',
  designation: '',
  email: '',
  phone: '',
  city: '',
  studentCount: '',
  program: '',
  message: '',
}

export default function CollegeLeadForm() {
  const [form, setForm] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const validate = () => {
    const next = {}
    if (!form.collegeName.trim()) next.collegeName = 'College name is required.'
    if (!form.contactPerson.trim()) next.contactPerson = 'Contact person is required.'
    if (!form.email.trim()) next.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address.'
    if (!form.phone.trim()) next.phone = 'Phone number is required.'
    else if (!/^[0-9+\-\s()]{7,15}$/.test(form.phone)) next.phone = 'Enter a valid phone number.'
    if (!form.program) next.program = 'Please select a program.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('submitting')
    setTimeout(() => {
      setStatus('success')
    }, 900)
  }

  if (status === 'success') {
    return (
      <div className="card-surface p-8 flex flex-col items-center text-center gap-3">
        <CheckCircle2 size={36} className="text-accent" />
        <h3 className="font-bold text-lg text-ink-primary">Consultation Request Received</h3>
        <p className="text-ink-secondary text-sm max-w-sm">
          Thank you for reaching out. Our team will review your requirements and get in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="card-surface p-7 sm:p-8 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="College Name" required error={errors.collegeName} htmlFor="collegeName">
          <Input id="collegeName" value={form.collegeName} onChange={update('collegeName')} error={errors.collegeName} placeholder="e.g. XYZ Institute of Technology" />
        </Field>
        <Field label="Contact Person" required error={errors.contactPerson} htmlFor="contactPerson">
          <Input id="contactPerson" value={form.contactPerson} onChange={update('contactPerson')} error={errors.contactPerson} placeholder="Full name" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Designation" htmlFor="designation">
          <Input id="designation" value={form.designation} onChange={update('designation')} placeholder="e.g. Training & Placement Officer" />
        </Field>
        <Field label="City" htmlFor="city">
          <Input id="city" value={form.city} onChange={update('city')} placeholder="City" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Email" required error={errors.email} htmlFor="email">
          <Input id="email" type="email" value={form.email} onChange={update('email')} error={errors.email} placeholder="you@college.edu" />
        </Field>
        <Field label="Phone" required error={errors.phone} htmlFor="phone">
          <Input id="phone" type="tel" value={form.phone} onChange={update('phone')} error={errors.phone} placeholder="+91 00000 00000" />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Number of Students" htmlFor="studentCount">
          <Input id="studentCount" type="number" min="1" value={form.studentCount} onChange={update('studentCount')} placeholder="e.g. 120" />
        </Field>
        <Field label="Program Required" required error={errors.program} htmlFor="program">
          <Select id="program" value={form.program} onChange={update('program')} error={errors.program}>
            <option value="">Select a program</option>
            {programOptions.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </Select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message">
        <Textarea id="message" value={form.message} onChange={update('message')} placeholder="Tell us about your requirements..." />
      </Field>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary group mt-2 disabled:opacity-70">
        {status === 'submitting' ? 'Submitting...' : 'Request Consultation'}
      </button>
    </form>
  )
}

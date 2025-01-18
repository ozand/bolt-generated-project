import { useState } from 'react'
    import { useChangePassword } from '../api/password'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'

    export default function Settings() {
      const [currentPassword, setCurrentPassword] = useState('')
      const [newPassword, setNewPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const { change } = useChangePassword()

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (newPassword !== confirmPassword) {
          alert('Passwords do not match')
          return
        }
        await change({ currentPassword, newPassword })
      }

      return (
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Account Settings</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="currentPassword">Current Password</Label>
              <Input
                id="currentPassword"
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm New Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end">
              <Button type="submit">Change Password</Button>
            </div>
          </form>
        </div>
      )
    }

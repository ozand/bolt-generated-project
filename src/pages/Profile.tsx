import { useEffect, useState } from 'react'
    import { useAuth } from '../context/AuthContext'
    import { useUpdateProfile } from '../api/profile'
    import { Button } from '@/components/ui/button'
    import { Input } from '@/components/ui/input'
    import { Label } from '@/components/ui/label'
    import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'

    export default function Profile() {
      const { user, logout } = useAuth()
      const { update } = useUpdateProfile()
      const [formData, setFormData] = useState({
        username: user?.username || '',
        email: user?.email || '',
        avatar: user?.avatar || '',
      })

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        })
      }

      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await update(formData)
      }

      return (
        <div className="max-w-2xl mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
          
          <div className="flex items-center space-x-4 mb-8">
            <Avatar className="h-20 w-20">
              <AvatarImage src={formData.avatar} />
              <AvatarFallback>{user?.username[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold">{user?.username}</h2>
              <p className="text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                disabled
              />
            </div>

            <div>
              <Label htmlFor="avatar">Avatar URL</Label>
              <Input
                id="avatar"
                name="avatar"
                value={formData.avatar}
                onChange={handleChange}
              />
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="submit">Save Changes</Button>
              <Button variant="destructive" onClick={logout}>
                Log Out
              </Button>
            </div>
          </form>
        </div>
      )
    }

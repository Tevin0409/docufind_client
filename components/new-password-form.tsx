import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export function NewPasswordForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Create a New Password</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Enter your new password below to complete the reset process. Ensure it
          is strong and secure.
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="new_password">New Password</Label>

          <div className="flex items-center space-x-2">
            <Input id="new_password" type="password" required />

            <EyeOffIcon className="size-4" />
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="confirm_password">Confirm Password</Label>

          {/* icon for password visibility */}
          <div className="flex items-center space-x-2">
            <Input id="confirm_password" type="password" required />
            <EyeIcon className="size-4" />
          </div>
        </div>

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </div>
    </form>
  );
}

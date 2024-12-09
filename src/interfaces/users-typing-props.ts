interface UserTypingProps {
  id: number;
  name: string;
}

interface UsersTypingProps extends Array<UserTypingProps> {}

export type { UserTypingProps, UsersTypingProps };

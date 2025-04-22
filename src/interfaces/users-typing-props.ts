interface UserTypingProps {
  id: string;
  name: string;
}

interface UsersTypingProps extends Array<UserTypingProps> {}

export type { UsersTypingProps, UserTypingProps };

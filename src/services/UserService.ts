import { UserProps } from '../app/core/models/user';

export class UserService implements UserProps {
  id: string;
  email: string;
  password: string;

  constructor(props: UserProps) {
    const { id, email, password } = props;
    this.id = id || '';
    this.email = email || '';
    this.password = password || '';
  }
}

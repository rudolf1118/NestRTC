import { ManyToOne, Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToOne } from 'typeorm'
import { User } from '../users/user.entity'

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    title: string;

    @ManyToOne(() => User, (user) => user, { nullable: false, eager: true })
    owner: User;

    @CreateDateColumn()
    createdAt;

    @Column({ type: 'timestamptz', nullable: true })
    expiryAt?: Date;

    @Column({ default: 3 })
    maxParticipants: number;
}
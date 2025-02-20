import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'

@Entity()
export class Room {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    title: string;

    @Column()
    owner: string;

    @CreateDateColumn()
    createdAt;

    @Column({ type: 'timestamptz', nullable: true })
    expiryAt?: Date;
}
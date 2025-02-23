import { Room } from 'src/rooms/room.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nickname: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @OneToMany(() => Room,  (room) => room.owner, { nullable: true })
    rooms: Room[]
}
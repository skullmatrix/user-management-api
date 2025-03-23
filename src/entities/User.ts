import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity } from "typeorm";

@Entity({ name: "users" })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    firstName!: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    lastName!: string;

    @Column({ type: "varchar", length: 255, unique: true, nullable: false })
    email!: string;

    @Column({ type: "varchar", length: 50, nullable: false })
    section!: string;
}
import { FactoryDetail } from 'src/factory-details/factory-detail.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Factory {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    subscriptionStart: Date;

    @Column()
    subscriptionEnd: Date;

    @Column()
    employeeCount: number;

    @Column()
    free: boolean;

    @OneToMany(() => FactoryDetail, (detail) => detail.factory)
    details: FactoryDetail[];
}

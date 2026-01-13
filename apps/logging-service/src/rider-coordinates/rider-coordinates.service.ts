import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from '../schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateRiderCoordinateDto } from './dto/create-coordinates.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly ridercooridnatemodel:Model<RiderCoordinate>,
        @Inject('RIDER_SERVICE') private client:ClientProxy

    ){}

    async getRidercoordinate(riderId:string){
    const cooridinates=await this.ridercooridnatemodel.find({rider:riderId})
    const pattern={cmd:'get-tider'}
        const payload={id:riderId}
        const rider=await firstValueFrom(this.client.send(pattern,payload))
        return {cooridinates,rider}
}


    async saveRidercoordinates(CreateRiderCoordinateDto:CreateRiderCoordinateDto){
        return await this.ridercooridnatemodel.create(CreateRiderCoordinateDto)
    }
}

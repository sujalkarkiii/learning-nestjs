import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRiderCoordinateDto } from './dto/create-coordinates.dto';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    constructor (private coordinateserivce:RiderCoordinatesService){}
    @Get()
   async getRiderCordinates(
    @Param()
    Params:any
   ){
        return this.coordinateserivce.getRidercoordinate(Params.id)
    }

    @Post()
    saveRidercoordinates(
        @Body() coordinateDto:CreateRiderCoordinateDto
    ){
            return this.coordinateserivce.saveRidercoordinates(coordinateDto)
    }
}

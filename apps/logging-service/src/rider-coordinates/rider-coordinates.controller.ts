import { Controller, Get } from '@nestjs/common';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCordinates(){
        return 'hello i am from rider cordinates'
    }

}

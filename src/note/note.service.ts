import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { DatabaseService } from 'src/database/database.service';
@Injectable()
export class NoteService {
  constructor (private readonly databaseservice:DatabaseService){}

  async create(createNoteDto: CreateNoteDto) {
    return await this.databaseservice.notes.create({
      data: createNoteDto,
    });
  }
  findAll() {
    return `This action returns all note`;
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}

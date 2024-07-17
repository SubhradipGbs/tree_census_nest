import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class FileStorageService {
  constructor() {}
  private readonly uploadDir = 'uploads/';
  async saveImgFiles(
    files: Express.Multer.File[],
  ): Promise<{ filename: string; dir: string }[]> {
    const savedFiles = [];
    for (const file of files) {
      const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e5)}`;
      const extension = '.' + file.originalname.split('.').pop();
      const filename = `${uniqueSuffix}${extension}`;
      const filepath = join(this.uploadDir, filename);
      await writeFile(filepath, file.buffer);
      savedFiles.push({ filename, dir: filepath });
    }
    return savedFiles;
  }
}

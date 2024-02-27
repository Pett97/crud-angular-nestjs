import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'id_category',
  standalone: true,
})
export class CategoryPipe implements PipeTransform {
  transform(id: number): string {
    switch (id) {
      case 1:
        return 'terminal';
      case 2:
        return 'web';
      case 3:
        return 'save';
      case 4:
        return 'photo';
      case 13:
        return 'movie';
      case 14:
        return 'image';
    }
    return 'terminal';
  }
}

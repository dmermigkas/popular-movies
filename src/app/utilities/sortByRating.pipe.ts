import { Pipe } from "@angular/core";

@Pipe({
  name: "sortByRating"
})

export class ArraySortPipe {

  transform(array: Array<string>): Array<string> {

    array && array.sort((a: any, b: any) => {
      if (a.vote_average < b.vote_average) {
        return 1;
      } else if (a.vote_average > b.vote_average) {
        return -1;
      } else {
        return 0;
      }
    });

    return array || [];

  }

}

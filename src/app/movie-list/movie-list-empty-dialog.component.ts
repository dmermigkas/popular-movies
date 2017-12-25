import {Component, Inject} from "@angular/core";
import {MatDialogRef, MAT_DIALOG_DATA} from "@angular/material";

@Component({
  selector: 'app-empty-dialog',
  templateUrl: './movie-list-empty-dialog.component.html',
})
export class EmptyListDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<EmptyListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

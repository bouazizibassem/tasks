import { Component, OnInit , ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { DialogViewUserComponent } from '../dialog-view-user/dialog-view-user.component';
import { SelectionModel } from '@angular/cdk/collections';
import { UserService } from 'src/app/services/user.service';
import { AffectRoleComponent } from '../affect-role/affect-role.component';

  export interface PeriodicElement {
    username: string;
    email: string;
    role : string ; 
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
   
    {username: 'Neon', email: 'email@tanitlab.com' , role : "admin"},
    
  ];

@Component({
  selector: 'app-liste-user',
  templateUrl: './liste-user.component.html',
  styleUrls: ['./liste-user.component.scss']
})
export class ListeUserComponent implements OnInit  {
  listUser: any;

  constructor(private dialog : MatDialog , private userService : UserService ) {}

  ngOnInit(): void {
    // this.getDataTable(); 
    this.getAllUser()
  }

  getAllUser(){
    this.userService.getUsers().subscribe(res=>{
      this.listUser = res
      for(let i=0; i< this.listUser.length; i++){
        this.listUser[i].role = this.listUser[i].roles[0].nameRole
        
        this.listeData.push(this.listUser[i]);
      }
       console.log(this.listeData);
    })
   }

  listeData:any[]=[];

   
  displayedColumns = [ 'username', 'email', 'role' , 'action' ];
  dataSource = new MatTableDataSource(this.listeData); 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selection = new SelectionModel<PeriodicElement>(true, []);
 
 
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
     const numSelected = this.selection.selected.length;
     const numRows = this.dataSource.data.length;
     return numSelected === numRows;
   }
 
   /** Selects all rows if they are not all selected; otherwise clear selection. */
   toggleAllRows() {
     if (this.isAllSelected()) {
       this.selection.clear();
       return;
     }
 
     this.selection.select(...this.dataSource.data);
   }
 
   /** The label for the checkbox on the passed row */
   checkboxLabel(row?: PeriodicElement): string {
     if (!row) {
       return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
     }
   }


 
 
 
   

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openDialogAddUser() {
    this.dialog.open(DialogAddUserComponent, {
    });
  }

  openDialogEditUser() {
    this.dialog.open(DialogEditUserComponent, {
    });
  }

  openDialogRole(data : any) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = data
    var dialog = this.dialog.open(AffectRoleComponent,dialogConfig);
    dialog.afterClosed().subscribe(result => {
      this.listUser = []
      this.listeData = []
      this.getAllUser()
    });
  }

  openDialogViewUser() {
    this.dialog.open(DialogViewUserComponent, {
       maxHeight:'80vh'    
    });
  }

  
}

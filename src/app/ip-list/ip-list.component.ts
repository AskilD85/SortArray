import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

interface Route {
  'uuid': string;
  'address': string;
  'mask': string;
  'gateway': string;
  'interface': string;
}


@Component({
  selector: 'app-ip-list',
  templateUrl: './ip-list.component.html',
  styleUrls: ['./ip-list.component.css']
})



export class IpListComponent implements OnInit, AfterViewInit {
  ipList: Route[] = [
    { uuid:'vsdvdv1', address: '3.3.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Подключение Ethernet'  },
    { uuid: 'vsdvdv2', address: '4.3.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Домашняя сеть' },
    { uuid: 'vsdvdv3', address: '5.3.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Гостевая сеть' },
    { uuid: 'vsdvdv4', address: '3.6.3.3', mask: '255.255.255.0', gateway: '193.0.174.10', interface: 'Подключение Ethernet' },
    { uuid: 'vsdvdv5', address: '3.7.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Гостевая сеть' },
    { uuid: 'vsdvdv6', address: '3.8.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Подключение Ethernet' },
    { uuid: 'vsdvdv7', address: '3.9.3.3', mask: '255.255.255.0', gateway: '193.0.174.14', interface: 'Домашняя сеть' },
    { uuid: 'vsdvdv8', address: '12.3.3.3', mask: '255.255.255.0', gateway: '10.0.0.1', interface: 'Подключение Ethernet' },
  ];
  dataSource: MatTableDataSource<Route> = new MatTableDataSource(this.ipList);
  displayedColumns: string[] = ['address', 'gateway','mask','interface'];
  @ViewChild(MatSort) sort!: MatSort;
  constructor() { }

  ngAfterViewInit(): void {
    this.dataSource = new MatTableDataSource(this.ipList);
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    console.log(this.dataSource);
  }
}

/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Customer } from './customer.model';
import { BehaviorSubject } from 'rxjs';
import { take, map, tap, delay, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

interface CustData {
    country: string;
    address: string;
    phoneNum: number;
    fullName: string;
    email: string;
    id: string;
}

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private custs = new BehaviorSubject<Customer[]>([]);

    constructor(private http: HttpClient) { }

    get $customers() {
        return this.custs.asObservable();
    }

    getCust(id: string) {
        return this.$customers.pipe(take(1), map(cust => ({ ...cust.find(p => p.email === id) })));
    }

    fetchCust() {
        return this.http.get<{ [key: string]: CustData }>('https://beautycare-2fd4f-default-rtdb.asia-southeast1.firebasedatabase.app/customer/customer-details.json').pipe(map(resCust => {
            const custs = [];
            for (const key in resCust) {
                if (resCust.hasOwnProperty(key)) {
                    custs.push(new Customer(key,
                        resCust[key].email,
                        resCust[key].fullName,
                        resCust[key].phoneNum,
                        resCust[key].address,
                        resCust[key].country));
                }
            }
            return custs;
        }), tap(custs => {
            this.custs.next(custs);
        }));
    }

    addCust(
        email: string,
        fullName: string,
        phoneNum: number,
        address: string,
        country: string) {
        let generatedId: string;
        const newCust = new Customer(Math.random().toString(),
            email,
            fullName,
            phoneNum,
            address,
            country,
        );
        return this.http.post<{ name: string }>('https://beautycare-2fd4f-default-rtdb.asia-southeast1.firebasedatabase.app/customer/customer-details.json', { ...newCust, id: null }).pipe(switchMap(resCust => {
            generatedId = resCust.name;
            console.log(resCust);
            return this.custs;
        }), take(1), tap(custs => {
            newCust.id = generatedId;
            this.custs.next(custs.concat(newCust));
        }));
        // return this.$custs.pipe(take(1), delay(1000), tap(cust => {
        //     this.cust.next(cust.concat(newCust));
        // }));
    }

    updateCust(custId: string, email: string, fullName: string, phoneNum: number, address: string, country: string) {
        let updatedCusts: Customer[];
        return this.$customers.pipe(take(1), switchMap(custs => {
            const updatedCustIndex = custs.findIndex(pl => pl.id === custId);
            updatedCusts = [...custs];
            const oldCust = updatedCusts[updatedCustIndex];
            updatedCusts[updatedCustIndex] = new Customer(oldCust.id, email, fullName, phoneNum, address, country);
            this.custs.next(updatedCusts);
            console.log(custId);
            return this.http.put(`https://beautycare-2fd4f-default-rtdb.asia-southeast1.firebasedatabase.app/customer/${custId}.json`, { ...updatedCusts[updatedCustIndex], id: null });
        }), tap(resCust => {
            this.custs.next(updatedCusts);
        }));
    }
}

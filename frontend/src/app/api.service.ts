import { Injectable } from '@angular/core';
import { environment } from '.././environments/environment';
import { HttpClient } from '@angular/common/http'

//ng generate service Api --module app.module.ts tells clie to registerd in appmodudle.ts

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(

    private http: HttpClient

  ) { }

  // API get customer

  public getAllFactories()  {

    return this.http.get(`${API_URL}/factory/`);

  }

  //API Post customer
  public createFactory(factory) {
    //will use this.http.get
    return this.http.post(`${API_URL}/customer/`, factory);
  }
  //API get customer by id//
  public getFactoryById(factoryId) {
    //will use this.http.get // Id
    return this.http.get(`${API_URL}/customer/`, factoryId);

  }
  //api put customer by id
  public updateFacotryById(factoryId) {
    //will use this.http.put
    return this.http.put(`${API_URL}/customer/`, factoryId);
  }
  //api deleted customer
  public deleteFactoryById(factoryId) {
    //will use this.http.get
    return this.http.delete(`${API_URL}/customer/`, factoryId);
  }


  public getAllCustomers()  {

    return this.http.get(`${API_URL}/customer/`);

  }

  //API Post customer
  public createCustomer(customer) {
    //will use this.http.get
    return this.http.post(`${API_URL}/customer/`, customer);
  }
  //API get customer by id//
  public getCustomerById(customerId) {
    //will use this.http.get // Id
    return this.http.get(`${API_URL}/customer/`, customerId);

  }
  //api put customer by id
  public updateCustomerById(customerId) {
    //will use this.http.put
    return this.http.put(`${API_URL}/customer/`, customerId);
  }
  //api deleted customer
  public deleteCustomerById(customerId) {
    //will use this.http.get
    return this.http.delete(`${API_URL}/customer/`, customerId);
  }
  // Tasks

  public getAllTasks()  {

    return this.http.get(`${API_URL}/task/`);

  }
  public createTask(task) {
    //will use this.http.get
    return this.http.post(`${API_URL}/task/`, task);
  }
  //API get customer by id//
  public getTaskById(taskId) {
    //will use this.http.get // Id
    return this.http.get(`${API_URL}/task/`, taskId);

  }
  //api put customer by id
  public updateTaskById(taskId) {
    //will use this.http.put
    return this.http.put(`${API_URL}/task/`, taskId);
  }
  //api deleted customer
  public deleteTaskById(taskId) {
    //will use this.http.get
    return this.http.delete(`${API_URL}/task/`, taskId);
  }

  public getAllOrders()  {

    return this.http.get(`${API_URL}/order/`);

  }
  public createOrder(order) {
    //will use this.http.get
    return this.http.post(`${API_URL}/order/`, order);
  }
  //API get customer by id//
  public getOrderById(orderId) {
    //will use this.http.get // Id
    return this.http.get(`${API_URL}/order/`, orderId);

  }
  //api put customer by id
  public updateOrderById(orderId) {
    //will use this.http.put
    return this.http.put(`${API_URL}/order/`, orderId);
  }
  //api deleted customer
  public deleteOrderById(orderId) {
    //will use this.http.get
    return this.http.delete(`${API_URL}/order/`, orderId);
  }
}

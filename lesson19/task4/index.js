'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
class Order {
  constructor(price, city, type) {
    this.price = +price;
    this.city = city;
    this.type = type;
    this.id = Math.random().toString();
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = null;
  }

  checkPrice() {
    if (this.price < 1000) {
      return false;
    } else {
      return true;
    }
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
      this.id = Math.random();
    }
  }

  isValidType() {
    if (this.type === `Buy` || this.type === `Sell`) {
      return true;
    }
    return false;
  }
}

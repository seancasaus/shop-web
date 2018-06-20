import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';
let ns = new NotificationService();

let instance = null;
var wishList = [];



class DataService {
  constructor() {
    if(!instance) {
      instance = this;
    }

    return instance;
  }

  addWishListItem = (item) => {
    wishList.push(item);
    console.log(wishList);
    ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList); //used to interface with notification service
  }

  removeWishListItem = (item) => {
    for (var x = 0; x < wishList.length; x++) {
      if(wishList[x]._id === item._id) {
        wishList.splice(x, 1);
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
        break;
      }
    }
  }
}

export default DataService;

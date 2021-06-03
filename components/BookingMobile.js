import styles from '../styles/BookingMobile.module.css'
import Purpose from './Purpose'
import PurposeMobile from './PurposeMobile'
import MakeAnOfferMobile from './MakeAnOfferMobile'
import ApplyBtnMobile from './ApplyBtnMobile'
import PickUpAtaskMobile from './PickUpAtaskMobile'
import BookingBuddyMobile from './BookingBuddyMobile'

const BookingMobile = () => {
  return (
    <div className={styles.container}>
      <PurposeMobile />
      <MakeAnOfferMobile />
      <ApplyBtnMobile />
      <PickUpAtaskMobile />
      <PickUpAtaskMobile />
      <PickUpAtaskMobile />
      <BookingBuddyMobile />
    </div>
  )
}

export default BookingMobile

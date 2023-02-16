import style from './roomInput.module.scss'

const RoomInput = props => {
  return (
    <div className={style.roomInput_container}>
      <div className={style.roomsInput_wrapper}>
        <div className={style.roomInput_section}>
          <span className={style.room_name}>{props.rooms}</span>
        </div>
        <div className={style.roomInput_section}>
          <p className={style.room_quantity}>
            <span className={style.add}>-</span> 1 <span className={style.add}>+</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoomInput

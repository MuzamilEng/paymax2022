import style from './table.module.css'

const Table2 = props => {
  return (
    <div className={style.table_form}>
      <div className={style.table_form_body}>
        <div className={style.Description}>
          <p className={style.my_property}>{props.desc}</p>
        </div>
        <div className={style.Amounts}>
          <div className={style.Description}>
            <p className={style.my_property}>{props.rate}</p>
          </div>
          <div className={style.Description}>
            <p className={style.my_property}>{props.amount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table2

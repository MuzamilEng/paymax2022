import style from "./table.module.css"

const TableInput = (props) => {
  return (
    <div className={style.table_form}>
      <div className={style.table_form_body}>
        <div className={style.Description}>
          <h4 className={style.headings}>{props.desc}</h4>
        </div>
        <div className={style.Amounts}>
          <div className={style.Description}>
            <h4 className={style.headings}>{props.rate}</h4>
          </div>
          <div className={style.Description}>
            <h4 className={style.headings}>{props.amount}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableInput

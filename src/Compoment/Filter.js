import Fields from '../Props/Fields'
import style from './filter.module.css'
import SearchIcon from '@mui/icons-material/Search'

const Filter = () => {
  return (
    <div className={style.filter_sections}>
      <div className={style.filter_sections_container}>
        <div className={style.filter_cantent}>
          <h1 className={` ${style.headings} ${style.blue}`}>Filter</h1>
        </div>
        <div className={style.filter_cantent1}>
          <div className={style.cantent_body}>
            <h2 className={` ${style.headings} ${style.blue}`}>Hotel Name</h2>
            <img src={'../../../assets/img/blue_arrow.png'} alt='' className={style.blue_arrow} />
          </div>
          <div className={style.cantent_body}>
            <input
              type='text'
              className={` ${style.cantent_input} ${style.my_property}`}
              placeholder='Search by Hotel Name'
            />
            <img src={`../../../assets/img/search.png`} alt='' className={style.search_filter} />
          </div>
        </div>
        <div className={style.filter_cantent1}>
          <div className={style.cantent_body}>
            <h2 className={` ${style.headings} ${style.blue}`}>Price</h2>
            <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.blue_arrow} />
          </div>
          <div className={style.cantent_body2}>
            <h3 className={` ${style.headings} ${style.grey} ${style.large}`}>$125 - $980</h3>
            <input type='range' className={` ${style.ranges_input} ${style.my_property}`} />
          </div>
        </div>
      </div>
      <div className={style.filter_content_section}>
        <h3 className={` ${style.headings} ${style.blue} ${style.pr_type}`}>Property Types</h3>
        <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.arrow_menu} />
      </div>
      <div className={style.fields}>
        <Fields place='Hotel' value='250' />
        <Fields place='Resort' value='76' />
        <Fields place='Vila' value='89' />
        <Fields place='Heritage' value='12' />
        <Fields place='Motel' value='63' />
        <Fields place='Guest House' value='45' />
        <Fields place='Farm House' value='67' />
        <Fields place='Palace' value='120' />
        <Fields place='Serviced Apartments' value='44' />
      </div>
      <div className={style.filter_content_section}>
        <h3 className={` ${style.headings} ${style.blue}`}>Star Category</h3>
        <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.arrow_menu} />
      </div>
      <div className={style.fields}>
        <Fields place='5 Star' image={`../../../assets/img/star0.svg`} value='250' />
        <Fields place='4 Star' image={`../../../assets/img/star0.svg`} value='76' />
        <Fields place='3 Star' image={`../../../assets/img/star0.svg`} value='89' />
        <Fields place='2 Star' image={`../../../assets/img/star0.svg`} value='12' />
        <Fields place='1 Star' image={`../../../assets/img/star0.svg`} value='63' />
      </div>
      <div className={style.filter_content_section}>
        <h3 className={` ${style.headings} ${style.blue}`}>User Reviews</h3>
        <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.arrow_menu} />
      </div>
      <div className={style.fields}>
        <Fields place='Excellent' value='250' />
        <Fields place='Good' value='76' />
        <Fields place='Fair' value='89' />
        <Fields place='Poor' value='12' />
        <Fields place='Bad' value='63' />
      </div>
      <div className={style.filter_content_section}>
        <h3 className={` ${style.headings} ${style.blue}`}>Amenities</h3>
        <img src={`../../../assets/img/blue_arrow.png`} alt='' className={style.arrow_menu} />
      </div>
      <div className={style.fields}>
        <Fields place='Internet/Wifi' image={`../../../assets/img/wifi.svg`} value='250' />
        <Fields place='Resturant' image={`../../../assets/img/knife.svg`} value='76' />
        <Fields place='Bar' image={'../../../assets/img/glass.svg'} value='89' />
        <Fields place='Swimming Pool' image={`../../../assets/img/beach.svg`} value='12' />
        <Fields place='Business Facilities' image={`../../../assets/img/business.svg`} value='63' />
        <Fields place='Spa/Wellness' image={`../../../assets/img/leaves.svg`} value='63' />
        <Fields place='Gym' image={`../../../assets/img/gym.svg`} value='63' />
      </div>
    </div>
  )
}

export default Filter

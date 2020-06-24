import React, { useState } from 'react'
import { Row, Col, Checkbox } from 'antd';
import { Button, Card, Popover } from 'antd'
import { EditOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Redirect } from 'react-router-dom'
import { Data } from './MovieData'
// import Favorite from './Favorite'
// import Wishlist from './Wishlist'
// import HeartCheckbox from 'react-heart-checkbox';
import { Pagination } from 'antd';

const { Meta } = Card;


function MovieList(props) {
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(8)
  const [showFav, setShowFav] = useState(false)
  const [showWL, setShowWL] = useState(false)
  const handleChange = value => {
    if (value <= 1) {
      setMin(0)
      setMax(8)
    }
    else {
      setMin(max)
      setMax(value * 8)
    }
  }
  const show = (val) => {
    if (val === 'fav')
      setShowFav(true)
    else if (val === 'wl')
      setShowWL(true)
  }
  const handleFavorite = (value, e) => {
    if (e.target.checked === false) {
      let newfav = props.fav.includes(value.id) ? props.fav.filter(ele => ele !== value.id) : props.fav
      props.setFav([...newfav])
    }
    if (e.target.checked !== false) {
      props.setFav([...props.fav, value.id])
    }
  }
  const handleWishList = (value, e) => {
    if (e.target.checked === false) {
      let newwish = props.wishlist.includes(value.id) ? props.wishlist.filter(ele => ele !== value.id) : props.wishlist
      props.setWish([...newwish])
    }
    if (e.target.checked !== false) {
      props.setWish([...props.wishlist, value.id])
    }
  }

  console.log(props.fav, props.wishlist)
  return (
    < div >
      <p>Movies</p>
      <Button onClick={() => show('fav')}>show Favorites list</Button>
      <Button onClick={() => show('wl')}>Show WishList</Button>
      {showFav ? <Redirect to='/favorites'></Redirect> : null}
      {showWL ? <Redirect to='/wishlist'></Redirect> : null}
      {
        Data ?
          <div className="site-card-wrapper">
            <Row gutter={16}>
              {Data.slice(min, max).map(item =>
                <Col span={6}>
                  <Card
                    style={{ marginRight: 13, width: 300, marginBottom: 8 }}
                    cover={
                      <img
                        alt=""
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                      />
                    }
                    actions={[

                      <Popover content={"favorites"}><Checkbox onChange={(e) => handleFavorite(item, e)} /></Popover>,
                      <Popover content={"WishList"}><Checkbox onChange={(e) => handleWishList(item, e)} key="wishlist" /></Popover>,
                      <Popover content={"Give Rating"}><EditOutlined key="rate" /></Popover>,
                    ]}
                    extra={<div><p>rating:{item.rating}</p><Button>View</Button></div>}>
                    <Meta
                      title={`${item.id}.${item.name}`}
                      description={`Actor:${item.actor} ; Director:${item.director}`}
                    />
                  </Card>
                </Col>
              )}
            </Row>
            <Pagination defaultCurrent={1}
              defaultPageSize={8}
              onChange={handleChange}
              total={20} />
          </div> : null
      }

    </div >
  )
}

const mapStateToProps = (state) => {
  return {
    fav: state.movie.fav,
    wishlist: state.movie.wishlist
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    get setFav() {
      return (value) =>
        dispatch({
          type: 'SET_FAV',
          payload: value
        })
    },
    get setWish() {
      return (value) =>
        dispatch({
          type: 'SET_WL',
          payload: value
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);

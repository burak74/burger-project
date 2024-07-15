import React from 'react'
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div className='leftSide' style={{backgroundImage: `url(${BannerImage})`}}>
        </div>
        <div className='rightSide'>
            <h1>Bizimle İletişime Geçin</h1>
            <form>
                <label>Ad Soyad</label>
                <input type="text" placeholder='Lütfen adınızı soyadınızı giriniz...'></input>
                <label>E-Mailiniz</label>
                <input type="email" placeholder='Lütfen mailinizi giriniz...'></input>
                <label>Mesajınız</label>
                <textarea placeholder='Lütfen mesajınızı giriniz...'></textarea>
                <button>Gönder</button>
            </form>
        </div>
    </div>
  )
}

export default Contact;
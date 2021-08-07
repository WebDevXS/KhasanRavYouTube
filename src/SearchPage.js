import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";

function SearchPage() {
    return (
        <div className="searchPage">
           <div className="searchPage__filter">
               <TuneOutlinedIcon />
               <h2>FILTER</h2>
           </div>
           <hr/>
           <ChannelRow 
           image="https://wallpaperaccess.com/full/3510654.jpg"
           channel="MMA Community"
           verified
           subs="12K"
           noOfVideos={256}
           description="Here you can find any information related to MMA world and some fun info outside formality"
           />
           <hr/>
           <VideoRow
           views="2.3K"
           subs="12K"
           description="Here is how you fight"
           timestamp="2 days ago"
           channel="MMA Community"
           title="Punch trajectory"
           image="data:image/jpeg;base64,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"
           />
           <VideoRow
           views="2M"
           subs="12K"
           description="How Israel Adesanya became a UFC superstar super fast"
           timestamp="3 years ago"
           channel="MMA Community"
           title="The Last Stylebender The Rise"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFox_XblsShRRtd-C9Nf9cSayxrxddGzLy1Q&usqp=CAU"
           />
           <VideoRow
           views="23K"
           subs="12K"
           description="Romero crushing his opponents"
           timestamp="20 days ago"
           channel="MMA Community"
           title="Romero the Soldier of God"
           image="https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2020-12/KhamzatChimaevUFCVegas11Celebration.jpg?VersionId=null&h=d1cb525d&itok=DyS2Zc5b"
           />
           <VideoRow
           views="23K"
           subs="12K"
           description="Khabib on the way to become the greatest lightweight in the history of UFC and become the No1 pound-for-pound fighter in the world"
           timestamp="2 years ago"
           channel="MMA Community"
           title="Eagle rises again"
           image="https://mmasucka.com/wp-content/uploads/2020/11/Nelson.jpg"
           />
           <VideoRow
           views="2K"
           subs="12K"
           description="Chael humbling his opponents and the viewers"
           timestamp="23 days ago"
           channel="MMA Community"
           title="Uncle Chael shocks again"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiSkeTQVl9hCHNsSVqRLy9UMEQ68TbMdKSaA&usqp=CAU"
           />
           <VideoRow
           views="2M"
           subs="12K"
           description="Anderson Silve quits the Combats sport for a reason"
           timestamp="2 days ago"
           channel="MMA Community"
           title="I QUIT!"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFgAmZxP-3SqR9DkUbPZPfWfhrZsTStCLHSg&usqp=CAU"
           />
           <VideoRow
           views="4K"
           subs="12K"
           description="Total Annihilations"
           timestamp="2 years ago"
           channel="MMA Community"
           title="Soft Punchers"
           image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3UssRQ2J7XiRjRwBWU0vcOpgc7viWb20laQ&usqp=CAU"
           />
           


        </div>
    )
}

export default SearchPage

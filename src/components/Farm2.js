import React from "react";
import IMG_LOGO from "../assets/logo512.jpeg";



export default class Chart extends React.Component {
     state = {
        totalValue : 0,
        staked:0,
        account:'0x00'
      }

     
    render(){
        return (
      <div class="farm_box">
        <div class="farm_box_bg"></div>
        <div class="farm_name">
          <div width="64" height="64" class="farm_banner_box">
            <img
              src="https://www.goosedefi.com/images/farms/egg-busd.png"
              alt="EGG"
              class="final_banner"
            />
          </div>
          <div class="farm_name_box">
            <h2 color="text" class="final_name">
              AVS-ETH LP
            </h2>
            <div class="fees_box">
              <div class="fees">
                <svg
                  style={{ fill: "rgb(49, 208, 170)" }}
                  viewBox="0 0 24 24"
                  color="text"
                  width="20px"
                  xmlns="http://www.w3.org/2000/svg"
                  class="sc-bdfBwQ hMHdGP"
                >
                  <path d="M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z"></path>
                </svg>
                No Fees
              </div>
            </div>
          </div>
        </div>
        <div class="info_row">
          <div color="text" class="info_row_a">
            APR:
          </div>
          <div
            color="text"
            class="info_row_b"
            style={{ display: "flex", alignItems: "center" }}
          >
            <button class="sc-dlfnbm eSZGEW sc-hKgILt fwjcqd" type="button">
              <svg
                viewBox="0 0 25 24"
                color="text"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdfBwQ lkvAzg"
              >
                <path
                  d="M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z"
                  fill="#1FC7D4"
                ></path>
                <path
                  d="M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z"
                  fill="#1FC7D4"
                ></path>
                <path
                  d="M18.2 15.75H13.2V17.25H18.2V15.75Z"
                  fill="#1FC7D4"
                ></path>
                <path
                  d="M18.2 13.25H13.2V14.75H18.2V13.25Z"
                  fill="#1FC7D4"
                ></path>
                <path
                  d="M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z"
                  fill="#1FC7D4"
                ></path>
                <path
                  d="M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z"
                  fill="#1FC7D4"
                ></path>
              </svg>
            </button>
            0%
          </div>
        </div>
        <div class="sc-eCssSg info_row">
          <div color="text" class="sc-gsTCUz info_row_a">
            Stake:
          </div>
          <div color="text" class="sc-gsTCUz info_row_b">
            AVS-ETH LP
          </div>
        </div>
        <div class="sc-eCssSg info_row">
          <div color="text" class="sc-gsTCUz info_row_a">
            Earn:
          </div>
          <div color="text" class="sc-gsTCUz info_row_b">
            GRAIL
          </div>
        </div>
        <div class="sc-eCssSg info_row">
          <div
            color="text"
            class="sc-gsTCUz info_row_a"
            style={{ fontSize: "24px" }}
          >
            Staked
          </div>
          <div
            color="text"
            class="sc-gsTCUz info_row_b"
            style={{ fontSize: "14px" }}
          >
            <span> {9000000} </span>
          </div>
        </div>
        <div style={{ paddingTop: "16px" }}>
          <div class="earnings" style={{ display: "flex" }}>
            <div color="secondary" font-size="12px" class="sc-gsTCUz dXVGhj">
              GRAIL Earned
            </div>
          </div>
          <div class="earnings_box">
            <p className="earnings_box" style={{ fontSize: "24px" }}>
              <span> {900} </span>{" "}
            </p>
            <div class="sc-gInsOo grsaJH">
              <button
                onClick={90}
                type="button"
                class="sc-dlfnbm IcZWJ"
                style={{ fontSize: "15px" }}
              >
                Harvest
              </button>
            </div>
          </div>
          <div class="staking_box"></div>
          <form className="input-group">
            <input
              type="text"
              id="amount"
              placeholder="Enter the amount to stake"
            />

            <button
              type="button"
              style={{ fontSize: "15px" }}
              onClick={0}
              class="approve_button"
            >
              Approve Contract
            </button>
          </form>
        </div>
        <div class="sc-tYoTV jYOTaZ"></div>
        <div
          aria-label="Hide or show expandable content"
          role="button"
          class="sc-bTvRPi bhoBuD"
        >
          <div>
            <button class="approve_button" onClick={withdraw}>
              Unstake all{" "}
            </button>
          </div>
        </div>
      </div>
        )}
}

<template>
    <div class="profileBox-warpper" :class="[{king : props.king},{birthday : props.birthday},{bg : bg}]">
        <div class="inner-wrapper">
            <div class="picture">
                <div class="pictueWrapper" :class="[{king : props.king},{birthday : props.birthday}]">
                    <div class="pictueInnerWrapper">
                        <img :src="img.src" :alt="img.alt" v-if="img.src" />
                        <span v-else>{{firstName}}</span>
                    </div>
                    
                    <div class="battery-icon" v-if="props.battery > -1 && props.battery !== null && props.battery !== false && !props.by2">
                        <div class="battery-box">
                            <span class="bar" :style="barStyle"></span>
                            <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <mask id="path-1-inside-1_14224_486" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.435974 2.52779C0 3.38344 0 4.50354 0 6.74375V7.94375C0 10.184 0 11.3041 0.435974 12.1597C0.819467 12.9124 1.43139 13.5243 2.18404 13.9078C3.03969 14.3438 4.15979 14.3438 6.4 14.3438H18.6C20.8402 14.3438 21.9603 14.3438 22.816 13.9078C23.5686 13.5243 24.1805 12.9124 24.564 12.1597C25 11.3041 25 10.184 25 7.94375V6.74375C25 4.50354 25 3.38344 24.564 2.52779C24.1805 1.77514 23.5686 1.16322 22.816 0.779724C21.9603 0.34375 20.8402 0.34375 18.6 0.34375H6.4C4.15979 0.34375 3.03969 0.34375 2.18404 0.779724C1.43139 1.16322 0.819467 1.77514 0.435974 2.52779ZM27.3587 7.20245C27.3587 6.45206 26.7504 5.84375 26 5.84375V8.84375C26.7504 8.84375 27.3587 8.23544 27.3587 7.48505V7.20245Z"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.435974 2.52779C0 3.38344 0 4.50354 0 6.74375V7.94375C0 10.184 0 11.3041 0.435974 12.1597C0.819467 12.9124 1.43139 13.5243 2.18404 13.9078C3.03969 14.3438 4.15979 14.3438 6.4 14.3438H18.6C20.8402 14.3438 21.9603 14.3438 22.816 13.9078C23.5686 13.5243 24.1805 12.9124 24.564 12.1597C25 11.3041 25 10.184 25 7.94375V6.74375C25 4.50354 25 3.38344 24.564 2.52779C24.1805 1.77514 23.5686 1.16322 22.816 0.779724C21.9603 0.34375 20.8402 0.34375 18.6 0.34375H6.4C4.15979 0.34375 3.03969 0.34375 2.18404 0.779724C1.43139 1.16322 0.819467 1.77514 0.435974 2.52779ZM27.3587 7.20245C27.3587 6.45206 26.7504 5.84375 26 5.84375V8.84375C26.7504 8.84375 27.3587 8.23544 27.3587 7.48505V7.20245Z" fill="#D1D1D1"/>
                                <path d="M0.435974 2.52779L-1.34604 1.61981L-1.34604 1.61981L0.435974 2.52779ZM0.435974 12.1597L-1.34604 13.0677L0.435974 12.1597ZM2.18404 13.9078L3.09202 12.1258H3.09202L2.18404 13.9078ZM22.816 13.9078L21.908 12.1258L21.908 12.1258L22.816 13.9078ZM24.564 12.1597L22.782 11.2517L24.564 12.1597ZM24.564 2.52779L22.782 3.43577V3.43577L24.564 2.52779ZM22.816 0.779724L21.908 2.56174L21.908 2.56174L22.816 0.779724ZM2.18404 0.779724L1.27606 -1.00229L1.27606 -1.00229L2.18404 0.779724ZM26 5.84375V3.84375H24V5.84375H26ZM26 8.84375H24V10.8438H26V8.84375ZM2 6.74375C2 5.59064 2.00156 4.8461 2.04785 4.27942C2.09225 3.7361 2.1676 3.53466 2.21799 3.43577L-1.34604 1.61981C-1.73163 2.37657 -1.87426 3.163 -1.93886 3.95369C-2.00156 4.72104 -2 5.65665 -2 6.74375H2ZM2 7.94375V6.74375H-2V7.94375H2ZM2.21799 11.2517C2.1676 11.1528 2.09225 10.9514 2.04785 10.4081C2.00156 9.8414 2 9.09686 2 7.94375H-2C-2 9.03085 -2.00156 9.96646 -1.93886 10.7338C-1.87426 11.5245 -1.73163 12.3109 -1.34604 13.0677L2.21799 11.2517ZM3.09202 12.1258C2.71569 11.934 2.40973 11.6281 2.21799 11.2517L-1.34604 13.0677C-0.770799 14.1967 0.147084 15.1145 1.27606 15.6898L3.09202 12.1258ZM6.4 12.3438C5.24689 12.3438 4.50235 12.3422 3.93567 12.2959C3.39235 12.2515 3.19091 12.1761 3.09202 12.1258L1.27606 15.6898C2.03282 16.0754 2.81925 16.218 3.60994 16.2826C4.37729 16.3453 5.3129 16.3438 6.4 16.3438V12.3438ZM18.6 12.3438H6.4V16.3438H18.6V12.3438ZM21.908 12.1258C21.8091 12.1761 21.6077 12.2515 21.0643 12.2959C20.4977 12.3422 19.7531 12.3438 18.6 12.3438V16.3438C19.6871 16.3438 20.6227 16.3453 21.3901 16.2826C22.1807 16.218 22.9672 16.0754 23.7239 15.6898L21.908 12.1258ZM22.782 11.2517C22.5903 11.6281 22.2843 11.934 21.908 12.1258L23.7239 15.6898C24.8529 15.1145 25.7708 14.1967 26.346 13.0677L22.782 11.2517ZM23 7.94375C23 9.09686 22.9984 9.8414 22.9521 10.4081C22.9078 10.9514 22.8324 11.1528 22.782 11.2517L26.346 13.0677C26.7316 12.3109 26.8743 11.5245 26.9389 10.7338C27.0016 9.96646 27 9.03085 27 7.94375H23ZM23 6.74375V7.94375H27V6.74375H23ZM22.782 3.43577C22.8324 3.53466 22.9078 3.7361 22.9521 4.27942C22.9984 4.8461 23 5.59064 23 6.74375H27C27 5.65665 27.0016 4.72104 26.9389 3.95369C26.8743 3.163 26.7316 2.37657 26.346 1.61981L22.782 3.43577ZM21.908 2.56174C22.2843 2.75348 22.5903 3.05944 22.782 3.43577L26.346 1.61981C25.7708 0.490835 24.8529 -0.427049 23.7239 -1.00229L21.908 2.56174ZM18.6 2.34375C19.7531 2.34375 20.4977 2.34531 21.0643 2.3916C21.6077 2.436 21.8091 2.51135 21.908 2.56174L23.7239 -1.00229C22.9672 -1.38788 22.1807 -1.53051 21.3901 -1.59511C20.6227 -1.65781 19.6871 -1.65625 18.6 -1.65625V2.34375ZM6.4 2.34375H18.6V-1.65625H6.4V2.34375ZM3.09202 2.56174C3.19091 2.51135 3.39235 2.436 3.93567 2.3916C4.50235 2.34531 5.24689 2.34375 6.4 2.34375V-1.65625C5.3129 -1.65625 4.37729 -1.65781 3.60994 -1.59511C2.81925 -1.53051 2.03282 -1.38788 1.27606 -1.00229L3.09202 2.56174ZM2.21799 3.43577C2.40973 3.05944 2.71569 2.75348 3.09202 2.56174L1.27606 -1.00229C0.147084 -0.427049 -0.770799 0.490834 -1.34604 1.61981L2.21799 3.43577ZM26 7.84375C25.6458 7.84375 25.3587 7.55663 25.3587 7.20245H29.3587C29.3587 5.34749 27.855 3.84375 26 3.84375V7.84375ZM28 8.84375V5.84375H24V8.84375H28ZM25.3587 7.48505C25.3587 7.13087 25.6458 6.84375 26 6.84375V10.8438C27.855 10.8438 29.3587 9.34001 29.3587 7.48505H25.3587ZM25.3587 7.20245V7.48505H29.3587V7.20245H25.3587Z" fill="white" mask="url(#path-1-inside-1_14224_486)"/>
                            </svg>
                            <i class="icon">
                                <svg width="7" height="9" viewBox="0 0 7 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M0.464844 4.82372L4.03825 0.212891L3.46189 3.59417H6.53578L1.57913 8.47398L3.1545 4.82372H0.464844Z" fill="#FFFFFE"/>
                                </svg>
                            </i>
                        </div>
                        <!-- <span class="text">{{props.battery}}%</span> -->
                    </div>
                </div>
            </div>
            <div class="infomation">
                <div class="name">
                    <div class="name-text-area">
                        {{props.name}}

                        <div class="battery-box type2" v-if="props.battery > -1 && props.battery !== null && props.battery !== false && props.by2">
                            <span class="text" :style="{color:batteryColor[0]}">
                                {{props.battery}}%
                            </span>
                            <svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="32.3362" height="16.8148" rx="5.17379" :fill="batteryColor[0]" fill-opacity="0.4"/>
                                <path d="M32.9831 5.82035C33.4977 5.82035 33.9912 6.0929 34.355 6.57803C34.7189 7.06317 34.9233 7.72116 34.9233 8.40724C34.9233 9.09333 34.7189 9.75132 34.355 10.2365C33.9912 10.7216 33.4977 10.9941 32.9831 10.9941L32.9831 8.40724V5.82035Z" :fill="batteryColor[1]"/>
                            </svg>
                            <div class="bar-wrappper">
                                <span class="bar" :style="barStyle2"></span>
                            </div>
                        </div>
                    </div>
                    <div class="icon-area">
                        <div class="birthdayIcon" v-if="props.birthday">
                            <svg width="30" height="29" viewBox="0 0 30 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.34375" width="30" height="28" rx="8" fill="#F5E0D4"/>
                                <rect x="0.5" y="0.84375" width="29" height="27" rx="7.5" stroke="#DA6D72" stroke-opacity="0.6"/>
                                <g clip-path="url(#clip0_14216_5343)">
                                <path opacity="0.5" d="M9.71875 15.3042V17.1282C9.88375 17.0652 10.0457 16.9752 10.1927 16.8732C10.2827 16.8102 10.3697 16.7292 10.4597 16.6482C10.6667 16.4592 10.8797 16.2642 11.1617 16.2642C11.4527 16.2642 11.6538 16.4532 11.8577 16.6422C11.9448 16.7232 12.0347 16.8072 12.1307 16.8732C12.4127 17.0742 12.7487 17.2242 13.0787 17.2242C13.4087 17.2242 13.7448 17.0742 14.0328 16.8732C14.1227 16.8102 14.2097 16.7292 14.2997 16.6482C14.5067 16.4592 14.7197 16.2642 15.0017 16.2642C15.2927 16.2642 15.4938 16.4532 15.6978 16.6422C15.7847 16.7232 15.8747 16.8072 15.9707 16.8732C16.2527 17.0742 16.5887 17.2242 16.9187 17.2242C17.2487 17.2242 17.5847 17.0742 17.8727 16.8732C17.9627 16.8102 18.0498 16.7292 18.1398 16.6482C18.3468 16.4592 18.5597 16.2642 18.8418 16.2642C19.1327 16.2642 19.3337 16.4532 19.5377 16.6422C19.6247 16.7232 19.7147 16.8072 19.8108 16.8732C19.9577 16.9752 20.1198 17.0652 20.2847 17.1282V15.3042C20.2847 15.0402 20.0688 14.8242 19.8048 14.8242H10.1987C9.93475 14.8242 9.71875 15.0402 9.71875 15.3042Z" fill="#DA6D72"/>
                                <path d="M10.8713 6.82906L10.1333 8.09206C10.0193 8.28706 9.9593 8.51206 9.9593 8.74006V8.82406C9.9593 9.48706 10.4963 10.0241 11.1593 10.0241C11.8223 10.0241 12.3593 9.48706 12.3593 8.82406V8.74006C12.3593 8.51206 12.2993 8.29006 12.1853 8.09206L11.4473 6.82906C11.3873 6.72706 11.2793 6.66406 11.1593 6.66406C11.0393 6.66406 10.9313 6.72706 10.8713 6.82906ZM14.7113 6.82906L13.9733 8.09206C13.8593 8.28706 13.7993 8.51206 13.7993 8.74006V8.82406C13.7993 9.48706 14.3363 10.0241 14.9993 10.0241C15.6623 10.0241 16.1993 9.48706 16.1993 8.82406V8.74006C16.1993 8.51206 16.1393 8.29006 16.0253 8.09206L15.2873 6.82906C15.2273 6.72706 15.1193 6.66406 14.9993 6.66406C14.8793 6.66406 14.7713 6.72706 14.7113 6.82906ZM17.8133 8.09206C17.6993 8.28706 17.6393 8.51206 17.6393 8.74006V8.82406C17.6393 9.48706 18.1763 10.0241 18.8393 10.0241C19.5023 10.0241 20.0393 9.48706 20.0393 8.82406V8.74006C20.0393 8.51206 19.9793 8.29006 19.8653 8.09206L19.1273 6.82906C19.0673 6.72706 18.9593 6.66406 18.8393 6.66406C18.7193 6.66406 18.6113 6.72706 18.5513 6.82906L17.8133 8.09206ZM11.8793 11.7041C11.8793 11.3051 11.5583 10.9841 11.1593 10.9841C10.7603 10.9841 10.4393 11.3051 10.4393 11.7041V13.3841H10.1993C9.1403 13.3841 8.2793 14.2451 8.2793 15.3041V21.0641C8.2793 21.5951 8.7083 22.0241 9.2393 22.0241H20.7593C21.2903 22.0241 21.7193 21.5951 21.7193 21.0641V15.3041C21.7193 14.2451 20.8583 13.3841 19.7993 13.3841H19.5593V11.7041C19.5593 11.3051 19.2383 10.9841 18.8393 10.9841C18.4403 10.9841 18.1193 11.3051 18.1193 11.7041V13.3841H15.7193V11.7041C15.7193 11.3051 15.3983 10.9841 14.9993 10.9841C14.6003 10.9841 14.2793 11.3051 14.2793 11.7041V13.3841H11.8793V11.7041ZM10.1993 14.8241H19.7993C20.0633 14.8241 20.2793 15.0401 20.2793 15.3041V17.1281C20.1143 17.0651 19.9523 16.9751 19.8053 16.8731C19.7093 16.8071 19.6223 16.7231 19.5323 16.6421C19.3313 16.4531 19.1273 16.2641 18.8363 16.2641C18.5543 16.2641 18.3413 16.4591 18.1343 16.6481C18.0473 16.7291 17.9603 16.8101 17.8673 16.8731C17.5853 17.0741 17.2493 17.2241 16.9193 17.2241C16.5893 17.2241 16.2533 17.0741 15.9653 16.8731C15.8693 16.8071 15.7823 16.7231 15.6923 16.6421C15.4913 16.4531 15.2873 16.2641 14.9963 16.2641C14.7143 16.2641 14.5013 16.4591 14.2943 16.6481C14.2073 16.7291 14.1203 16.8101 14.0273 16.8731C13.7453 17.0741 13.4093 17.2241 13.0793 17.2241C12.7493 17.2241 12.4133 17.0741 12.1253 16.8731C12.0293 16.8071 11.9423 16.7231 11.8523 16.6421C11.6513 16.4531 11.4503 16.2641 11.1593 16.2641C10.8773 16.2641 10.6643 16.4591 10.4573 16.6481C10.3703 16.7291 10.2833 16.8101 10.1903 16.8731C10.0433 16.9751 9.8813 17.0651 9.7163 17.1281L9.7193 15.3041C9.7193 15.0401 9.9353 14.8241 10.1993 14.8241ZM20.2793 18.6191V20.5841H9.7193V18.6191C10.2443 18.5201 10.7363 18.2711 11.1593 17.9501C11.7113 18.3701 12.3773 18.6641 13.0793 18.6641C13.7813 18.6641 14.4473 18.3701 14.9993 17.9501C15.5513 18.3701 16.2173 18.6641 16.9193 18.6641C17.6213 18.6641 18.2873 18.3701 18.8393 17.9501C19.2623 18.2711 19.7543 18.5201 20.2793 18.6191Z" fill="#DA6D72"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_14216_5343">
                                <rect width="13.44" height="15.36" fill="white" transform="translate(8.2793 6.66406)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div class="kingIcon" v-if="props.king">
                            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="0.34375" width="30" height="30" rx="8" fill="#EEF2FE" fill-opacity="0.8"/>
                                <rect x="0.5" y="0.84375" width="29" height="29" rx="7.5" stroke="#3783C8" stroke-opacity="0.5"/>
                                <path d="M16.5664 9.70355C16.5664 10.3306 16.1944 10.8736 15.6604 11.1196L18.8404 13.9036L21.9724 13.2766C21.8134 13.0456 21.7204 12.7636 21.7204 12.4636C21.7204 11.6686 22.3654 11.0236 23.1604 11.0236C23.9554 11.0236 24.6004 11.6686 24.6004 12.4636C24.6004 13.2436 23.9824 13.8766 23.2084 13.9036L19.8304 21.4126C19.5214 22.1026 18.8344 22.5436 18.0784 22.5436H11.9224C11.1664 22.5436 10.4824 22.0996 10.1704 21.4126L6.79239 13.9036C6.01839 13.8766 5.40039 13.2436 5.40039 12.4636C5.40039 11.6686 6.04539 11.0236 6.84039 11.0236C7.63539 11.0236 8.28039 11.6686 8.28039 12.4636C8.28039 12.7666 8.18739 13.0456 8.02839 13.2766L11.1604 13.9036L14.3434 11.1166C13.8124 10.8676 13.4434 10.3276 13.4434 9.70355C13.4434 8.84255 14.1424 8.14355 15.0034 8.14355C15.8644 8.14355 16.5634 8.84255 16.5634 9.70355H16.5664Z" fill="#076AEB"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="content" v-if="props.conText.length > 0">
                    <div class="context">{{props.conText}}</div><span class="time" v-if="props.time !== ''">{{props.time}}</span>
                </div>
            </div>
        </div>
        <div class="right-area" v-if="$slots.rightArea">
            <slot name="rightArea" />
        </div>
    </div>
</template>
<script setup>
    import { computed,defineProps } from 'vue'
    const props = defineProps({
        name : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        conText : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        time : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        img : {
            type : Object,
            default : ()=>{
                return {
                    src : null,
                    alt : "프로필 사진입나다",
                };
            }
        },
        king : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        birthday : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        battery : {
            type : Number,
            default : ()=>{
                return null;
            }
        },
        by2 : {
            type : Boolean,
            default : ()=> false,
        },
        bg : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        }
    })
    const barStyle = computed(()=>{
        const style = {};
        if(props.battery){
            const per = props.battery * 0.01;
            const width = `calc((100% - 4rem) * ${per})`
            const color = (props.battery < 14) ? "#eb4b43" : (props.battery < 51) ? "#ef8633" : (props.battery < 75) ? "#f7cd47" : "#57DED2";
            style.width = width;
            style.background = color;
        }
        return style;
    })
    const barStyle2 = computed(()=>{
        const style = {};
        style.width = props.battery + "%";

        let temp = ["#FF3D33","#FA3532"];
        const color = [["#FF3D33","#FA3532"],["#FFCC0A","#FFA143"],["#37C058","#396232"]];
        if(props.battery >= 75){
            temp = color[2];
        }else if(props.battery >= 50){
            temp = color[1];
        }
        style.background = temp[0];
        return style;
    })
    const firstName = computed(()=>{
        let temp = props.name.replace(/(^.).*/g,'$1');
        return temp;
    })
    const batteryColor = computed(()=>{
        let temp = ["#FF3D33","#FA3532"];
        const color = [["#FF3D33","#FA3532"],["#FFCC0A","#FFA143"],["#37C058","#396232"]];
        if(props.battery >= 75){
            temp = color[2];
        }else if(props.battery >= 50){
            temp = color[1];
        }
        return temp;
    })
</script>
<style type="scss" scoped>
    .profileBox-warpper{
        display:flex;
        padding:14rem 16rem;
        &.bg{
            border-radius:8rem;
            background:#F0F6FF;
        }
        .inner-wrapper{
            position:relative;
            display:flex;
            align-items:stretch;
            flex:1;
            &> .picture{
                position:relative;
                width:64rem;
                height:64rem;
                &> .pictueWrapper{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    height:100%;
                    border-radius:50%;

                    > .battery-icon{
                        position:absolute;
                        right:-7rem;
                        bottom:7rem;
                        width:25rem;
                        height:14rem;
                        .battery-box{
                            height:14rem;
                            overflow:hidden;
                            &> .icon{
                                position:absolute;
                                top:50%;
                                left:50%;
                                z-index:10;
                                transform:translate(-50%,-50%);
                            }
                            &> .bar{
                                position:absolute;
                                left:2rem;
                                top:2rem;
                                bottom:2rem;
                                z-index:2;
                                background:black;
                            }
                        }
                        &> svg{
                            position:relative;
                            z-index:5;
                        }
                        &> .text{
                            position:absolute;
                            right:0;
                            top:calc(50% - 1rem);
                            transform:translate(100%,-50%);
                            font-size:12rem;
                            line-height:1;
                        }
                    }
                    &> .pictueInnerWrapper{
                        position:relative;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        overflow:hidden;
                        font-size:28rem;
                        font-weight:normal;
                        line-height:1;
                        color:#fff;
                        background:#c4daef;
                        &> img{
                            position:absolute;
                            top:50%;
                            left:50%;
                            width:100%;
                            height:100%;
                            transform:translate(-50%,-50%);
                        }
                    }
                    /* &.birthday{
                        &> .pictueInnerWrapper{
                            width:calc(100% - 5rem);
                            height:calc(100% - 5rem);
                        }
                    } */
                }
            }
            &> .infomation{
                display:flex;
                justify-content:space-between;
                align-items:flex-start;
                flex-direction:column;
                flex:1;
                padding:0 0 0 15rem;
                &> .name{
                    display:flex;
                    align-items:center;
                    flex:1;
                    width:100%;
                    padding:0;
                    &> .name-text-area{
                        display: -webkit-box;
                        flex:1;
                        overflow:hidden; 
                        text-overflow:ellipsis;
                        max-height:22rem;
                        /* white-space:nowrap; */
                        font-size: 18rem;
                        font-style: normal;
                        font-weight: 600;
                        line-height: 1.2;
                        color:#333;
                        -webkit-line-clamp: 1;  /* 2줄 넘어가면 말줄임 */
                        -webkit-box-orient: vertical;
                    }
                    &> .icon-area{
                        position:relative;
                        right:0;
                        top:0;
                        display:flex;
                        &> div + div{
                            margin-left:10rem;
                        }
                        
                    }
                }
                &> .content{
                    display:flex;
                    padding:0 0 5rem;
                    margin:0;
                    font-family: "Noto Sans KR", sans-serif; /* 241214 : 수정 */
                    font-size: 15rem;
                    font-style: normal;
                    font-weight: 600;
                    line-height: 21.4rem;
                    color: #777;
                    &> .context{
                        display:-webkit-box;
                        overflow:hidden;
                        text-overflow:ellipsis;
                        -webkit-line-clamp:1;
                        -webkit-box-orient:vertical;
                        flex:1;

                    }
                    &> .time{
                        font-family: "Noto Sans KR", sans-serif; /* 241214 : 수정 */
                        color: #8C8D89;
                        font-size: 15rem;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 21.4rem;
                        &:before{
                            content:"·";
                            padding:0 8rem 0 10rem;
                            color: #9D9D9D;
                            font-family: "Noto Sans KR", sans-serif; /* 241214 : 수정 */
                            font-size: 15rem;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 21.4rem;
                        }
                    }
                }
            }
        }
        &> .right-area{
            display:flex;
            align-items:center;
            padding:0 0 0 10rem;
        }
        &+ .profileBox-warpper{
            margin-top:20rem;
        }
    }
    .battery-box.type2{
        position:relative;
        top:-2rem;
        display:inline-flex;
        align-items:center;
        vertical-align:middle;
        margin:0 0 0 5rem;
        &> .bar{
            position:absolute;
            height:10rem;
        }
        &> span{
            padding:0 5rem 0 0;
            text-align: center;
            font-family: "Roboto";
            font-size: 14rem;
            font-style: normal;
            font-weight: 600;
            line-height: 1;
            letter-spacing: -0.408rem;
        }
    }
    .bar-wrappper{
        position:absolute;
        top:0rem;
        right:3rem;
        bottom:0rem;
        width:33rem;
        border-radius:5.714rem;
        overflow:hidden;
        &> .bar{
            position:absolute;
            top:0;
            left:0;
            bottom:0;
            width:30%;
            background:red;
        }
    }
</style>
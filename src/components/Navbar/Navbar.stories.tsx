import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Navbar, { NavbarProps } from './Navbar';
import { ChatAlt2Icon } from '@heroicons/react/outline';

export default {
  title: "Components/Navbar",
  component: Navbar,
} as Meta;

const Template: Story<NavbarProps> = (args) => <Navbar {...args} />

export const TopLevel = Template.bind({});
TopLevel.args = {
  logo: (
    <svg width="224" height="37" viewBox="0 0 224 37" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M35.7841 24.665C36.4476 22.7647 36.8083 20.7224 36.8083 18.5959C36.8083 8.43153 28.5685 0.191711 18.4041 0.191711C8.23982 0.191711 0 8.43153 0 18.5959C0 23.6944 2.07329 28.3088 5.42279 31.6418L24.0919 12.9727L28.5647 17.4456L24.0919 21.9184L10.697 35.3134C13.0414 36.396 15.6522 37 18.4041 37C24.0885 37 29.1709 34.423 32.5469 30.3735L24.0919 21.9184L28.5647 17.4456L35.7841 24.665Z" fill="#10B981"/>
      <path d="M47.519 15.4249V2.92254H53.6273C54.2584 2.92254 54.8358 3.01779 55.3598 3.20831C55.8956 3.39882 56.354 3.66672 56.735 4.01203C57.116 4.34542 57.4137 4.75026 57.628 5.22654C57.8424 5.70282 57.9495 6.22673 57.9495 6.79826C57.9495 7.58412 57.7233 8.28663 57.2708 8.9058C56.8303 9.52496 56.2409 9.98338 55.5026 10.2811L58.271 15.4249H55.3776L52.9307 10.6383H50.1088V15.4249H47.519ZM53.3951 5.1551H50.1088V8.51286H53.3951C53.9785 8.51286 54.4429 8.35807 54.7882 8.04849C55.1454 7.73891 55.324 7.33407 55.324 6.83398C55.324 6.33389 55.1454 5.92905 54.7882 5.61947C54.4429 5.30989 53.9785 5.1551 53.3951 5.1551ZM58.511 10.7811C58.511 10.1024 58.636 9.47138 58.8861 8.88793C59.148 8.29259 59.4993 7.78059 59.9398 7.35193C60.3923 6.91138 60.9222 6.56607 61.5294 6.31603C62.1367 6.06598 62.7856 5.94096 63.4762 5.94096C64.1668 5.94096 64.8158 6.06598 65.423 6.31603C66.0303 6.56607 66.5542 6.91138 66.9947 7.35193C67.4472 7.78059 67.7985 8.29259 68.0485 8.88793C68.3105 9.47138 68.4414 10.1024 68.4414 10.7811C68.4414 11.4598 68.3105 12.0969 68.0485 12.6922C67.7985 13.2757 67.4472 13.7817 66.9947 14.2104C66.5542 14.639 66.0303 14.9784 65.423 15.2284C64.8158 15.4784 64.1668 15.6035 63.4762 15.6035C62.7856 15.6035 62.1367 15.4784 61.5294 15.2284C60.9222 14.9784 60.3923 14.639 59.9398 14.2104C59.4993 13.7817 59.148 13.2757 58.8861 12.6922C58.636 12.0969 58.511 11.4598 58.511 10.7811ZM63.4762 13.4781C64.1906 13.4781 64.7979 13.2161 65.298 12.6922C65.7981 12.1683 66.0481 11.5313 66.0481 10.7811C66.0481 10.0191 65.7981 9.37612 65.298 8.85221C64.7979 8.32831 64.1906 8.06635 63.4762 8.06635C62.7618 8.06635 62.1545 8.32831 61.6545 8.85221C61.1544 9.37612 60.9043 10.0191 60.9043 10.7811C60.9043 11.5313 61.1544 12.1683 61.6545 12.6922C62.1545 13.2161 62.7618 13.4781 63.4762 13.4781ZM74.5697 13.4602C74.9864 13.4602 75.3734 13.3769 75.7306 13.2102C76.0997 13.0435 76.451 12.7815 76.7844 12.4243L78.2489 13.9424C77.7726 14.4664 77.2011 14.8771 76.5343 15.1748C75.8675 15.4606 75.1769 15.6035 74.4625 15.6035C73.7838 15.6035 73.1408 15.4784 72.5336 15.2284C71.9382 14.9784 71.4203 14.639 70.9797 14.2104C70.5511 13.7817 70.2117 13.2757 69.9617 12.6922C69.7116 12.0969 69.5866 11.4598 69.5866 10.7811C69.5866 10.1024 69.7116 9.47138 69.9617 8.88793C70.2117 8.29259 70.5511 7.78059 70.9797 7.35193C71.4203 6.91138 71.9382 6.56607 72.5336 6.31603C73.1408 6.06598 73.7838 5.94096 74.4625 5.94096C75.2007 5.94096 75.9092 6.0898 76.5879 6.38747C77.2666 6.67324 77.8441 7.07807 78.3204 7.60198L76.8201 9.19156C76.4867 8.82245 76.1295 8.54263 75.7485 8.35212C75.3674 8.16161 74.9566 8.06635 74.5161 8.06635C73.8136 8.06635 73.2182 8.32831 72.73 8.85221C72.2538 9.37612 72.0156 10.0191 72.0156 10.7811C72.0156 11.5432 72.2597 12.1802 72.7479 12.6922C73.248 13.2042 73.8552 13.4602 74.5697 13.4602ZM79.5211 15.4249V2.92254L81.9679 2.38673V10.0489L85.9865 6.11956H88.7549L84.397 10.3882L89.0228 15.4249H85.8972L81.9679 11.1741V15.4249H79.5211ZM92.365 15.8535L92.5078 15.5142L88.8822 6.11956H91.5791L93.8831 12.46L96.5265 6.11956H99.1698L94.8833 16.1571C94.407 17.2764 93.8533 18.0742 93.2223 18.5504C92.5912 19.0267 91.7696 19.2649 90.7575 19.2649C90.5432 19.2649 90.3348 19.253 90.1324 19.2291C89.9419 19.2172 89.7871 19.1934 89.668 19.1577V17.0502C89.7871 17.074 89.9121 17.0918 90.0431 17.1037C90.1741 17.1157 90.3348 17.1216 90.5253 17.1216C90.9659 17.1216 91.335 17.0144 91.6327 16.8001C91.9423 16.5858 92.1864 16.2703 92.365 15.8535ZM103.891 15.4249V2.92254H113.5V5.17296H106.481V8.03063H111.107V10.2096H106.481V13.1744H113.571V15.4249H103.891ZM115.242 15.4249V6.11956H117.689V6.85184C118.046 6.55417 118.439 6.32794 118.868 6.17314C119.308 6.01835 119.784 5.94096 120.296 5.94096C121.368 5.94096 122.249 6.28626 122.94 6.97686C123.63 7.66747 123.976 8.55454 123.976 9.63807V15.4249H121.529V9.99528C121.529 9.41184 121.35 8.94152 120.993 8.58431C120.648 8.2271 120.183 8.04849 119.6 8.04849C119.195 8.04849 118.826 8.13184 118.493 8.29854C118.171 8.45333 117.903 8.67956 117.689 8.97724V15.4249H115.242ZM126.748 12.7994V8.17352H124.837V6.11956H126.748V3.74412L129.195 3.19045V6.11956H131.839V8.17352H129.195V12.2993C129.195 12.7398 129.291 13.0494 129.481 13.228C129.672 13.4066 130.005 13.4959 130.481 13.4959C130.708 13.4959 130.922 13.484 131.124 13.4602C131.327 13.4245 131.547 13.365 131.785 13.2816V15.282C131.523 15.3653 131.208 15.4308 130.838 15.4784C130.469 15.538 130.154 15.5677 129.892 15.5677C128.856 15.5677 128.07 15.3356 127.534 14.8712C127.01 14.3949 126.748 13.7043 126.748 12.7994ZM141.304 14.2639C140.732 14.7283 140.143 15.0677 139.536 15.282C138.94 15.4963 138.273 15.6035 137.535 15.6035C136.833 15.6035 136.172 15.4784 135.553 15.2284C134.945 14.9784 134.416 14.639 133.963 14.2104C133.523 13.7817 133.171 13.2757 132.909 12.6922C132.659 12.0969 132.534 11.4598 132.534 10.7811C132.534 10.1144 132.653 9.48924 132.891 8.9058C133.142 8.31045 133.481 7.79845 133.91 7.36979C134.338 6.92924 134.844 6.58393 135.428 6.33389C136.023 6.08384 136.654 5.95882 137.321 5.95882C137.976 5.95882 138.583 6.0898 139.143 6.35175C139.714 6.6018 140.202 6.9471 140.607 7.38766C141.024 7.82821 141.345 8.35807 141.572 8.97724C141.81 9.58449 141.929 10.2453 141.929 10.9597V11.6027H134.999C135.166 12.1862 135.487 12.6565 135.963 13.0137C136.44 13.3709 136.999 13.5495 137.642 13.5495C138.047 13.5495 138.428 13.484 138.785 13.3531C139.143 13.2221 139.446 13.0375 139.696 12.7994L141.304 14.2639ZM137.267 7.97705C136.708 7.97705 136.225 8.1497 135.821 8.495C135.416 8.8284 135.136 9.28087 134.981 9.8524H139.536C139.381 9.30468 139.095 8.85817 138.678 8.51286C138.273 8.15566 137.803 7.97705 137.267 7.97705ZM143.428 15.4249V6.11956H145.875V7.13761C146.173 6.73277 146.53 6.42914 146.947 6.22672C147.375 6.0124 147.846 5.90524 148.358 5.90524C148.596 5.91714 148.792 5.94096 148.947 5.97668C149.114 6.00049 149.257 6.04812 149.376 6.11956V8.26282C149.197 8.17947 149.001 8.11993 148.786 8.08421C148.572 8.03659 148.352 8.01277 148.125 8.01277C147.649 8.01277 147.209 8.13184 146.804 8.36998C146.411 8.60812 146.101 8.95342 145.875 9.40589V15.4249H143.428ZM150.701 19.1577V6.11956H153.112V6.88756C153.482 6.58989 153.892 6.36961 154.345 6.22672C154.797 6.07193 155.268 5.99454 155.756 5.99454C156.411 5.99454 157.024 6.11956 157.595 6.36961C158.179 6.61966 158.685 6.959 159.114 7.38766C159.542 7.81631 159.876 8.32235 160.114 8.9058C160.364 9.48924 160.489 10.1144 160.489 10.7811C160.489 11.4479 160.364 12.0731 160.114 12.6565C159.864 13.2399 159.524 13.746 159.096 14.1746C158.667 14.6033 158.155 14.9426 157.56 15.1927C156.976 15.4308 156.351 15.5499 155.684 15.5499C155.232 15.5499 154.785 15.4904 154.345 15.3713C153.916 15.2403 153.517 15.0557 153.148 14.8176V19.1577H150.701ZM155.363 8.08421C154.922 8.08421 154.512 8.16161 154.13 8.3164C153.749 8.45928 153.422 8.67361 153.148 8.95938V12.6208C153.41 12.8827 153.732 13.0911 154.113 13.2459C154.506 13.4007 154.922 13.4781 155.363 13.4781C156.125 13.4781 156.768 13.2221 157.292 12.7101C157.816 12.1862 158.078 11.5432 158.078 10.7811C158.078 10.0191 157.81 9.38207 157.274 8.87007C156.75 8.34617 156.113 8.08421 155.363 8.08421ZM161.986 15.4249V6.11956H164.433V7.13761C164.731 6.73277 165.088 6.42914 165.505 6.22672C165.933 6.0124 166.404 5.90524 166.916 5.90524C167.154 5.91714 167.35 5.94096 167.505 5.97668C167.672 6.00049 167.815 6.04812 167.934 6.11956V8.26282C167.755 8.17947 167.559 8.11993 167.344 8.08421C167.13 8.03659 166.91 8.01277 166.683 8.01277C166.207 8.01277 165.767 8.13184 165.362 8.36998C164.969 8.60812 164.659 8.95342 164.433 9.40589V15.4249H161.986ZM170.474 5.01221C170.093 5.01221 169.765 4.87528 169.492 4.60142C169.218 4.32756 169.081 4.00012 169.081 3.6191C169.081 3.23807 169.218 2.91063 169.492 2.63677C169.765 2.36291 170.093 2.22598 170.474 2.22598C170.855 2.22598 171.182 2.36291 171.456 2.63677C171.73 2.91063 171.867 3.23807 171.867 3.6191C171.867 4.00012 171.73 4.32756 171.456 4.60142C171.182 4.87528 170.855 5.01221 170.474 5.01221ZM171.706 6.11956V15.4249H169.259V6.11956H171.706ZM172.834 14.3175L174.049 12.6922C174.596 13.0494 175.114 13.3173 175.602 13.4959C176.091 13.6626 176.579 13.746 177.067 13.746C177.615 13.746 178.049 13.6567 178.371 13.4781C178.704 13.2995 178.871 13.0613 178.871 12.7637C178.871 12.5255 178.776 12.335 178.585 12.1921C178.407 12.0492 178.115 11.948 177.71 11.8885L175.924 11.6206C175.007 11.4777 174.305 11.18 173.816 10.7276C173.34 10.2751 173.102 9.6738 173.102 8.92366C173.102 8.03063 173.453 7.31621 174.156 6.7804C174.858 6.24459 175.799 5.97668 176.978 5.97668C177.656 5.97668 178.317 6.07789 178.96 6.28031C179.603 6.47082 180.216 6.75659 180.8 7.13761L179.621 8.70933C179.109 8.41166 178.621 8.19138 178.156 8.04849C177.692 7.8937 177.222 7.81631 176.745 7.81631C176.305 7.81631 175.948 7.89966 175.674 8.06635C175.412 8.23305 175.281 8.45333 175.281 8.72719C175.281 8.97724 175.376 9.1737 175.567 9.31659C175.769 9.44756 176.097 9.54282 176.549 9.60235L178.335 9.87026C179.24 10.0012 179.937 10.2989 180.425 10.7633C180.925 11.2277 181.175 11.8171 181.175 12.5315C181.175 12.972 181.068 13.3828 180.853 13.7638C180.651 14.133 180.371 14.4544 180.014 14.7283C179.657 15.0022 179.228 15.2165 178.728 15.3713C178.228 15.5261 177.686 15.6035 177.103 15.6035C176.257 15.6035 175.465 15.4963 174.727 15.282C173.989 15.0557 173.358 14.7343 172.834 14.3175ZM190.821 14.2639C190.25 14.7283 189.66 15.0677 189.053 15.282C188.458 15.4963 187.791 15.6035 187.053 15.6035C186.35 15.6035 185.689 15.4784 185.07 15.2284C184.463 14.9784 183.933 14.639 183.481 14.2104C183.04 13.7817 182.689 13.2757 182.427 12.6922C182.177 12.0969 182.052 11.4598 182.052 10.7811C182.052 10.1144 182.171 9.48924 182.409 8.9058C182.659 8.31045 182.998 7.79845 183.427 7.36979C183.856 6.92924 184.362 6.58393 184.945 6.33389C185.54 6.08384 186.172 5.95882 186.838 5.95882C187.493 5.95882 188.1 6.0898 188.66 6.35175C189.232 6.6018 189.72 6.9471 190.125 7.38766C190.541 7.82821 190.863 8.35807 191.089 8.97724C191.327 9.58449 191.446 10.2453 191.446 10.9597V11.6027H184.516C184.683 12.1862 185.005 12.6565 185.481 13.0137C185.957 13.3709 186.517 13.5495 187.16 13.5495C187.565 13.5495 187.946 13.484 188.303 13.3531C188.66 13.2221 188.964 13.0375 189.214 12.7994L190.821 14.2639ZM186.785 7.97705C186.225 7.97705 185.743 8.1497 185.338 8.495C184.933 8.8284 184.653 9.28087 184.499 9.8524H189.053C188.898 9.30468 188.612 8.85817 188.196 8.51286C187.791 8.15566 187.321 7.97705 186.785 7.97705ZM46.5903 31.2816L47.5011 30.335C48.1441 31.0137 48.8288 31.5317 49.5551 31.8889C50.2933 32.2342 51.0673 32.4068 51.877 32.4068C52.8533 32.4068 53.6571 32.1746 54.2881 31.7103C54.9192 31.2459 55.2347 30.6565 55.2347 29.9421C55.2347 29.2991 55.0085 28.805 54.556 28.4597C54.1155 28.1144 53.3832 27.8584 52.3592 27.6917L50.5553 27.4059C49.3527 27.2154 48.4656 26.8641 47.8941 26.3521C47.3225 25.8282 47.0368 25.1257 47.0368 24.2446C47.0368 23.2087 47.4416 22.3692 48.2513 21.7263C49.061 21.0833 50.1207 20.7618 51.4305 20.7618C52.2997 20.7618 53.1629 20.9047 54.0202 21.1904C54.8775 21.4762 55.6574 21.887 56.3599 22.4228L55.5741 23.4944C54.8954 22.9824 54.2048 22.5955 53.5023 22.3335C52.7998 22.0716 52.0913 21.9406 51.3769 21.9406C50.4838 21.9406 49.7575 22.149 49.1979 22.5657C48.6502 22.9705 48.3763 23.4944 48.3763 24.1374C48.3763 24.7209 48.5728 25.1674 48.9657 25.477C49.3586 25.7865 50.0076 26.0128 50.9125 26.1557L52.6985 26.4414C54.0559 26.6677 55.0442 27.0546 55.6634 27.6024C56.2945 28.1501 56.61 28.9062 56.61 29.8706C56.61 30.4184 56.4909 30.9244 56.2528 31.3888C56.0265 31.8412 55.6991 32.2342 55.2705 32.5676C54.8537 32.8891 54.3477 33.1451 53.7523 33.3356C53.1689 33.5142 52.5259 33.6035 51.8234 33.6035C50.8351 33.6035 49.8825 33.407 48.9657 33.0141C48.0608 32.6092 47.269 32.0317 46.5903 31.2816ZM57.9919 28.9419C57.9919 28.2989 58.111 27.6917 58.3491 27.1201C58.5873 26.5486 58.9088 26.0544 59.3136 25.6377C59.7304 25.221 60.2185 24.8935 60.7782 24.6554C61.3378 24.4172 61.9331 24.2982 62.5642 24.2982C63.1953 24.2982 63.7847 24.4172 64.3324 24.6554C64.892 24.8935 65.3743 25.221 65.7791 25.6377C66.1958 26.0544 66.5233 26.5486 66.7614 27.1201C66.9996 27.6917 67.1186 28.2989 67.1186 28.9419C67.1186 29.5968 66.9996 30.21 66.7614 30.7815C66.5233 31.3531 66.1958 31.8472 65.7791 32.2639C65.3743 32.6807 64.892 33.0081 64.3324 33.2463C63.7847 33.4844 63.1953 33.6035 62.5642 33.6035C61.9331 33.6035 61.3378 33.4844 60.7782 33.2463C60.2185 33.0081 59.7304 32.6807 59.3136 32.2639C58.9088 31.8472 58.5873 31.3531 58.3491 30.7815C58.111 30.21 57.9919 29.5968 57.9919 28.9419ZM62.5642 32.4247C63.0167 32.4247 63.4394 32.3354 63.8323 32.1568C64.2371 31.9782 64.5825 31.7341 64.8682 31.4245C65.1659 31.103 65.3981 30.7339 65.5648 30.3171C65.7315 29.8885 65.8148 29.4301 65.8148 28.9419C65.8148 28.4537 65.7315 28.0012 65.5648 27.5845C65.3981 27.1558 65.1659 26.7867 64.8682 26.4771C64.5825 26.1676 64.2371 25.9235 63.8323 25.7449C63.4394 25.5663 63.0167 25.477 62.5642 25.477C62.1118 25.477 61.6831 25.5663 61.2783 25.7449C60.8853 25.9235 60.54 26.1676 60.2424 26.4771C59.9566 26.7867 59.7244 27.1558 59.5458 27.5845C59.3791 28.0012 59.2958 28.4537 59.2958 28.9419C59.2958 29.4301 59.3791 29.8885 59.5458 30.3171C59.7125 30.7339 59.9387 31.103 60.2245 31.4245C60.5222 31.7341 60.8734 31.9782 61.2783 32.1568C61.6831 32.3354 62.1118 32.4247 62.5642 32.4247ZM67.4881 24.4768H69.5957V22.78C69.5957 21.9108 69.8338 21.244 70.3101 20.7797C70.7864 20.3034 71.471 20.0652 72.364 20.0652C72.6022 20.0652 72.8165 20.0771 73.007 20.101C73.1975 20.1248 73.3821 20.1664 73.5607 20.226V21.4048C73.3583 21.3452 73.1737 21.3036 73.007 21.2797C72.8403 21.244 72.6558 21.2262 72.4533 21.2262C71.9294 21.2262 71.5365 21.3571 71.2745 21.6191C71.0245 21.8691 70.8995 22.268 70.8995 22.8157V24.4768H73.5607V25.602H70.8995V33.4249H69.5957V25.602H67.4881V24.4768ZM76.2717 31.4245V25.602H74.3428V24.4768H76.2717V22.2085L77.5755 21.8691V24.4768H80.2725V25.602H77.5755V31.0851C77.5755 31.5614 77.6827 31.9067 77.897 32.1211C78.1113 32.3235 78.4626 32.4247 78.9508 32.4247C79.2008 32.4247 79.4211 32.4068 79.6116 32.3711C79.814 32.3354 80.0284 32.2758 80.2546 32.1925V33.3534C80.0284 33.4368 79.7724 33.4963 79.4866 33.532C79.2127 33.5677 78.9448 33.5856 78.6829 33.5856C77.9089 33.5856 77.3136 33.4011 76.8968 33.0319C76.4801 32.6628 76.2717 32.127 76.2717 31.4245ZM84.7912 33.4249H83.5052L80.9869 24.4768H82.2907L84.2196 31.621L86.4522 24.4768H87.631L89.8457 31.621L91.7925 24.4768H93.0427L90.5065 33.4249H89.2384L87.0237 26.2628L84.7912 33.4249ZM97.2072 33.5856C96.2309 33.5856 95.4331 33.3356 94.8139 32.8355C94.2067 32.3354 93.9031 31.6864 93.9031 30.8887C93.9031 30.0552 94.2245 29.3944 94.8675 28.9062C95.5105 28.4061 96.3797 28.156 97.4751 28.156C97.9514 28.156 98.4098 28.2096 98.8504 28.3168C99.3029 28.4239 99.7196 28.5728 100.101 28.7633V27.5845C100.101 26.8701 99.8982 26.3343 99.4934 25.9771C99.0885 25.6079 98.4991 25.4234 97.7252 25.4234C97.2846 25.4234 96.8381 25.4889 96.3857 25.6198C95.9451 25.7389 95.4569 25.9354 94.9211 26.2092L94.421 25.1912C95.064 24.8816 95.6593 24.6554 96.2071 24.5125C96.7548 24.3696 97.3025 24.2982 97.8502 24.2982C98.9814 24.2982 99.8506 24.5661 100.458 25.1019C101.077 25.6377 101.387 26.4057 101.387 27.4059V33.4249H100.101V32.5497C99.6958 32.895 99.2493 33.157 98.7611 33.3356C98.2848 33.5023 97.7669 33.5856 97.2072 33.5856ZM95.1711 30.853C95.1711 31.3531 95.3795 31.7638 95.7963 32.0853C96.2249 32.3949 96.7726 32.5497 97.4394 32.5497C97.9752 32.5497 98.4634 32.4664 98.904 32.2997C99.3445 32.133 99.7434 31.871 100.101 31.5138V29.8349C99.7315 29.5849 99.3326 29.4063 98.904 29.2991C98.4872 29.18 98.0229 29.1205 97.5109 29.1205C96.7965 29.1205 96.2249 29.2812 95.7963 29.6027C95.3795 29.9123 95.1711 30.3291 95.1711 30.853ZM103.595 33.4249V24.4768H104.916V25.7449C105.178 25.2805 105.524 24.9233 105.952 24.6732C106.381 24.4113 106.869 24.2803 107.417 24.2803C107.583 24.2803 107.732 24.2922 107.863 24.316C107.994 24.3279 108.125 24.3577 108.256 24.4053V25.6198C108.101 25.5722 107.947 25.5365 107.792 25.5127C107.637 25.477 107.482 25.4591 107.327 25.4591C106.78 25.4591 106.297 25.6198 105.881 25.9413C105.464 26.2509 105.142 26.7034 104.916 27.2987V33.4249H103.595ZM116.661 32.4783C116.161 32.8474 115.637 33.1272 115.089 33.3177C114.553 33.4963 113.964 33.5856 113.321 33.5856C112.678 33.5856 112.071 33.4665 111.499 33.2284C110.939 32.9903 110.451 32.6628 110.035 32.2461C109.63 31.8293 109.308 31.3411 109.07 30.7815C108.832 30.21 108.713 29.5968 108.713 28.9419C108.713 28.2989 108.826 27.6976 109.052 27.138C109.29 26.5784 109.606 26.0902 109.999 25.6734C110.392 25.2567 110.856 24.9292 111.392 24.6911C111.94 24.453 112.517 24.3339 113.124 24.3339C113.72 24.3339 114.273 24.453 114.785 24.6911C115.309 24.9292 115.756 25.2567 116.125 25.6734C116.506 26.0902 116.804 26.5784 117.018 27.138C117.244 27.6976 117.357 28.2989 117.357 28.9419V29.3527H110.017C110.112 30.2338 110.475 30.9661 111.106 31.5495C111.737 32.133 112.493 32.4247 113.374 32.4247C113.839 32.4247 114.291 32.3532 114.732 32.2104C115.172 32.0675 115.542 31.8651 115.839 31.6031L116.661 32.4783ZM113.089 25.4948C112.315 25.4948 111.642 25.7568 111.07 26.2807C110.511 26.8046 110.171 27.4773 110.052 28.2989H116.036C115.917 27.5131 115.577 26.8522 115.018 26.3164C114.47 25.7687 113.827 25.4948 113.089 25.4948ZM123.292 33.4249V20.9225H132.24V22.1371H124.668V26.6022H129.633V27.7988H124.668V33.4249H123.292ZM132.015 28.9419C132.015 28.2989 132.134 27.6917 132.372 27.1201C132.611 26.5486 132.932 26.0544 133.337 25.6377C133.754 25.221 134.242 24.8935 134.801 24.6554C135.361 24.4172 135.956 24.2982 136.587 24.2982C137.219 24.2982 137.808 24.4172 138.356 24.6554C138.915 24.8935 139.398 25.221 139.802 25.6377C140.219 26.0544 140.547 26.5486 140.785 27.1201C141.023 27.6917 141.142 28.2989 141.142 28.9419C141.142 29.5968 141.023 30.21 140.785 30.7815C140.547 31.3531 140.219 31.8472 139.802 32.2639C139.398 32.6807 138.915 33.0081 138.356 33.2463C137.808 33.4844 137.219 33.6035 136.587 33.6035C135.956 33.6035 135.361 33.4844 134.801 33.2463C134.242 33.0081 133.754 32.6807 133.337 32.2639C132.932 31.8472 132.611 31.3531 132.372 30.7815C132.134 30.21 132.015 29.5968 132.015 28.9419ZM136.587 32.4247C137.04 32.4247 137.463 32.3354 137.856 32.1568C138.26 31.9782 138.606 31.7341 138.891 31.4245C139.189 31.103 139.421 30.7339 139.588 30.3171C139.755 29.8885 139.838 29.4301 139.838 28.9419C139.838 28.4537 139.755 28.0012 139.588 27.5845C139.421 27.1558 139.189 26.7867 138.891 26.4771C138.606 26.1676 138.26 25.9235 137.856 25.7449C137.463 25.5663 137.04 25.477 136.587 25.477C136.135 25.477 135.706 25.5663 135.302 25.7449C134.909 25.9235 134.563 26.1676 134.266 26.4771C133.98 26.7867 133.748 27.1558 133.569 27.5845C133.402 28.0012 133.319 28.4537 133.319 28.9419C133.319 29.4301 133.402 29.8885 133.569 30.3171C133.736 30.7339 133.962 31.103 134.248 31.4245C134.545 31.7341 134.897 31.9782 135.302 32.1568C135.706 32.3354 136.135 32.4247 136.587 32.4247ZM144.246 24.4768V29.8706C144.246 30.6565 144.473 31.2816 144.925 31.746C145.378 32.2104 145.985 32.4425 146.747 32.4425C147.283 32.4425 147.759 32.3235 148.176 32.0853C148.604 31.8353 148.95 31.49 149.212 31.0494V24.4768H150.533V33.4249H149.212V32.389C148.866 32.7938 148.456 33.0974 147.979 33.2998C147.515 33.5023 146.991 33.6035 146.408 33.6035C145.384 33.6035 144.55 33.282 143.907 32.639C143.264 31.996 142.943 31.1625 142.943 30.1385V24.4768H144.246ZM152.781 33.4249V24.4768H154.102V25.5305C154.448 25.1257 154.858 24.8221 155.335 24.6197C155.811 24.4053 156.341 24.2982 156.924 24.2982C157.936 24.2982 158.764 24.6197 159.407 25.2626C160.05 25.9056 160.371 26.7391 160.371 27.7631V33.4249H159.068V28.031C159.068 27.2451 158.841 26.62 158.389 26.1557C157.936 25.6913 157.329 25.4591 156.567 25.4591C156.031 25.4591 155.549 25.5782 155.12 25.8163C154.704 26.0544 154.364 26.3938 154.102 26.8344V33.4249H152.781ZM169.566 33.4249V32.4783C169.185 32.8355 168.745 33.1093 168.245 33.2998C167.757 33.4784 167.233 33.5677 166.673 33.5677C166.042 33.5677 165.453 33.4487 164.905 33.2105C164.357 32.9724 163.881 32.6509 163.476 32.2461C163.071 31.8293 162.75 31.3352 162.512 30.7637C162.285 30.1921 162.172 29.5849 162.172 28.9419C162.172 28.2989 162.285 27.6976 162.512 27.138C162.75 26.5664 163.071 26.0783 163.476 25.6734C163.881 25.2567 164.357 24.9292 164.905 24.6911C165.464 24.453 166.06 24.3339 166.691 24.3339C167.203 24.3339 167.703 24.4232 168.191 24.6018C168.691 24.7685 169.144 25.0185 169.549 25.3519V20.9225L170.87 20.6189V33.4249H169.566ZM163.476 28.924C163.476 29.4122 163.559 29.8706 163.726 30.2993C163.905 30.7279 164.143 31.0971 164.44 31.4066C164.738 31.7162 165.089 31.9603 165.494 32.1389C165.899 32.3175 166.334 32.4068 166.798 32.4068C167.358 32.4068 167.876 32.2997 168.352 32.0853C168.84 31.8591 169.239 31.5495 169.549 31.1566V26.7272C169.239 26.3462 168.84 26.0485 168.352 25.8342C167.864 25.6079 167.346 25.4948 166.798 25.4948C165.869 25.4948 165.083 25.8223 164.44 26.4771C163.797 27.132 163.476 27.9477 163.476 28.924ZM175.94 33.5856C174.963 33.5856 174.166 33.3356 173.547 32.8355C172.939 32.3354 172.636 31.6864 172.636 30.8887C172.636 30.0552 172.957 29.3944 173.6 28.9062C174.243 28.4061 175.112 28.156 176.208 28.156C176.684 28.156 177.142 28.2096 177.583 28.3168C178.035 28.4239 178.452 28.5728 178.833 28.7633V27.5845C178.833 26.8701 178.631 26.3343 178.226 25.9771C177.821 25.6079 177.232 25.4234 176.458 25.4234C176.017 25.4234 175.571 25.4889 175.118 25.6198C174.678 25.7389 174.189 25.9354 173.654 26.2092L173.154 25.1912C173.797 24.8816 174.392 24.6554 174.94 24.5125C175.487 24.3696 176.035 24.2982 176.583 24.2982C177.714 24.2982 178.583 24.5661 179.19 25.1019C179.81 25.6377 180.119 26.4057 180.119 27.4059V33.4249H178.833V32.5497C178.428 32.895 177.982 33.157 177.494 33.3356C177.017 33.5023 176.499 33.5856 175.94 33.5856ZM173.904 30.853C173.904 31.3531 174.112 31.7638 174.529 32.0853C174.957 32.3949 175.505 32.5497 176.172 32.5497C176.708 32.5497 177.196 32.4664 177.637 32.2997C178.077 32.133 178.476 31.871 178.833 31.5138V29.8349C178.464 29.5849 178.065 29.4063 177.637 29.2991C177.22 29.18 176.755 29.1205 176.243 29.1205C175.529 29.1205 174.957 29.2812 174.529 29.6027C174.112 29.9123 173.904 30.3291 173.904 30.853ZM183.086 31.4245V25.602H181.157V24.4768H183.086V22.2085L184.389 21.8691V24.4768H187.086V25.602H184.389V31.0851C184.389 31.5614 184.497 31.9067 184.711 32.1211C184.925 32.3235 185.277 32.4247 185.765 32.4247C186.015 32.4247 186.235 32.4068 186.426 32.3711C186.628 32.3354 186.842 32.2758 187.069 32.1925V33.3534C186.842 33.4368 186.586 33.4963 186.301 33.532C186.027 33.5677 185.759 33.5856 185.497 33.5856C184.723 33.5856 184.128 33.4011 183.711 33.0319C183.294 32.6628 183.086 32.127 183.086 31.4245ZM189.162 22.7622C188.924 22.7622 188.716 22.6729 188.537 22.4943C188.359 22.3157 188.269 22.1073 188.269 21.8691C188.269 21.6191 188.359 21.4107 188.537 21.244C188.716 21.0654 188.924 20.9761 189.162 20.9761C189.412 20.9761 189.621 21.0654 189.788 21.244C189.966 21.4107 190.055 21.6191 190.055 21.8691C190.055 22.1073 189.966 22.3157 189.788 22.4943C189.621 22.6729 189.412 22.7622 189.162 22.7622ZM189.823 24.4768V33.4249H188.502V24.4768H189.823ZM191.666 28.9419C191.666 28.2989 191.785 27.6917 192.024 27.1201C192.262 26.5486 192.583 26.0544 192.988 25.6377C193.405 25.221 193.893 24.8935 194.453 24.6554C195.012 24.4172 195.608 24.2982 196.239 24.2982C196.87 24.2982 197.459 24.4172 198.007 24.6554C198.566 24.8935 199.049 25.221 199.454 25.6377C199.87 26.0544 200.198 26.5486 200.436 27.1201C200.674 27.6917 200.793 28.2989 200.793 28.9419C200.793 29.5968 200.674 30.21 200.436 30.7815C200.198 31.3531 199.87 31.8472 199.454 32.2639C199.049 32.6807 198.566 33.0081 198.007 33.2463C197.459 33.4844 196.87 33.6035 196.239 33.6035C195.608 33.6035 195.012 33.4844 194.453 33.2463C193.893 33.0081 193.405 32.6807 192.988 32.2639C192.583 31.8472 192.262 31.3531 192.024 30.7815C191.785 30.21 191.666 29.5968 191.666 28.9419ZM196.239 32.4247C196.691 32.4247 197.114 32.3354 197.507 32.1568C197.912 31.9782 198.257 31.7341 198.543 31.4245C198.84 31.103 199.073 30.7339 199.239 30.3171C199.406 29.8885 199.489 29.4301 199.489 28.9419C199.489 28.4537 199.406 28.0012 199.239 27.5845C199.073 27.1558 198.84 26.7867 198.543 26.4771C198.257 26.1676 197.912 25.9235 197.507 25.7449C197.114 25.5663 196.691 25.477 196.239 25.477C195.786 25.477 195.358 25.5663 194.953 25.7449C194.56 25.9235 194.214 26.1676 193.917 26.4771C193.631 26.7867 193.399 27.1558 193.22 27.5845C193.054 28.0012 192.97 28.4537 192.97 28.9419C192.97 29.4301 193.054 29.8885 193.22 30.3171C193.387 30.7339 193.613 31.103 193.899 31.4245C194.197 31.7341 194.548 31.9782 194.953 32.1568C195.358 32.3354 195.786 32.4247 196.239 32.4247ZM202.629 33.4249V24.4768H203.951V25.5305C204.296 25.1257 204.707 24.8221 205.184 24.6197C205.66 24.4053 206.19 24.2982 206.773 24.2982C207.785 24.2982 208.613 24.6197 209.256 25.2626C209.899 25.9056 210.22 26.7391 210.22 27.7631V33.4249H208.916V28.031C208.916 27.2451 208.69 26.62 208.238 26.1557C207.785 25.6913 207.178 25.4591 206.416 25.4591C205.88 25.4591 205.398 25.5782 204.969 25.8163C204.552 26.0544 204.213 26.3938 203.951 26.8344V33.4249H202.629Z" fill="black"/>
      <path d="M216.511 25.4209V23.2374H215.787V22.8155H216.511V21.9649L217 21.8376V22.8155H218.011V23.2374H217V25.2936C217 25.4722 217.04 25.6017 217.12 25.6821C217.201 25.758 217.332 25.7959 217.515 25.7959C217.609 25.7959 217.692 25.7892 217.763 25.7758C217.839 25.7624 217.92 25.7401 218.004 25.7089V26.1442C217.92 26.1755 217.824 26.1978 217.716 26.2112C217.614 26.2246 217.513 26.2313 217.415 26.2313C217.125 26.2313 216.901 26.1621 216.745 26.0236C216.589 25.8852 216.511 25.6843 216.511 25.4209ZM218.542 26.171V22.8155H219.037V23.1838C219.162 23.0409 219.308 22.9338 219.473 22.8623C219.638 22.7864 219.821 22.7485 220.022 22.7485C220.254 22.7485 220.462 22.8043 220.645 22.9159C220.832 23.0231 220.977 23.1704 221.08 23.358C221.219 23.1526 221.384 23.0008 221.576 22.9025C221.772 22.7998 221.991 22.7485 222.232 22.7485C222.594 22.7485 222.889 22.869 223.116 23.1102C223.348 23.3513 223.465 23.6638 223.465 24.0478V26.171H222.976V24.1483C222.976 23.8536 222.897 23.6192 222.741 23.445C222.585 23.2709 222.373 23.1838 222.105 23.1838C221.922 23.1838 221.754 23.2307 221.603 23.3245C221.451 23.4182 221.321 23.5544 221.214 23.733C221.223 23.7822 221.23 23.8335 221.234 23.8871C221.243 23.9362 221.248 23.9898 221.248 24.0478V26.171H220.759V24.1483C220.759 23.8536 220.681 23.6192 220.524 23.445C220.368 23.2709 220.158 23.1838 219.895 23.1838C219.716 23.1838 219.553 23.2262 219.406 23.3111C219.263 23.3915 219.14 23.512 219.037 23.6728V26.171H218.542Z" fill="black"/>
    </svg>
  ),

  leftLinks: [
    {
      label: 'Projects',
      onClick: () => {}
    },
    {
      label: 'Community',
      onClick: () => {},
    },
    {
      label: 'Partners',
      onClick: () => {},
    }
  ],

  rightLinks: [
    {
      label: 'Resources',
      onClick: () => {},
    }
  ],

  ctas: [
    {
      preIcon: (<ChatAlt2Icon />),
      children: 'Join the discussion',
      link: 'https://chat.rockylinux.org'
    }
  ]
}

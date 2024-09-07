

interface Props {
  className: any;
}

export const Text = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="11"
      viewBox="0 0 97 11"
      width="97"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.85893 3.75015H7.2947C7.23453 3.41591 7.12256 3.12178 6.95879 2.86776C6.79501 2.61374 6.59447 2.39816 6.35716 2.22101C6.11985 2.04387 5.85413 1.91017 5.56 1.81993C5.26921 1.72968 4.96004 1.68456 4.63249 1.68456C4.04089 1.68456 3.51112 1.8333 3.04319 2.13077C2.5786 2.42824 2.21094 2.86442 1.94021 3.43931C1.67282 4.0142 1.53912 4.7161 1.53912 5.54501C1.53912 6.3806 1.67282 7.08585 1.94021 7.66073C2.21094 8.23562 2.58027 8.67013 3.0482 8.96426C3.51614 9.25839 4.04256 9.40546 4.62748 9.40546C4.95169 9.40546 5.25919 9.36201 5.54997 9.2751C5.8441 9.18486 6.10982 9.05284 6.34713 8.87903C6.58444 8.70523 6.78498 8.49299 6.94876 8.24231C7.11588 7.98829 7.23119 7.6975 7.2947 7.36995L8.85893 7.37496C8.77537 7.87966 8.61326 8.34425 8.37261 8.76873C8.1353 9.18987 7.82948 9.55419 7.45513 9.86169C7.08413 10.1658 6.65964 10.4015 6.18168 10.5686C5.70372 10.7357 5.18231 10.8193 4.61745 10.8193C3.72838 10.8193 2.93623 10.6087 2.24102 10.1876C1.54581 9.76309 0.997655 9.15645 0.59657 8.36765C0.198827 7.57885 -4.47353e-05 6.63797 -4.47353e-05 5.54501C-4.47353e-05 4.44871 0.200498 3.50783 0.601583 2.72237C1.00267 1.93357 1.55082 1.3286 2.24603 0.90746C2.94125 0.482977 3.73172 0.270736 4.61745 0.270736C5.16226 0.270736 5.6703 0.349282 6.14158 0.506375C6.61619 0.660124 7.04235 0.887405 7.42003 1.18822C7.79772 1.48569 8.11024 1.85001 8.35757 2.28118C8.60491 2.709 8.77203 3.19866 8.85893 3.75015ZM10.5924 10.6789V2.97806H12.0413V4.20137H12.1215C12.2619 3.78692 12.5092 3.46104 12.8635 3.22373C13.2211 2.98308 13.6256 2.86275 14.0768 2.86275C14.1704 2.86275 14.2807 2.86609 14.4077 2.87278C14.538 2.87946 14.64 2.88782 14.7135 2.89785V4.33173C14.6534 4.31501 14.5464 4.29663 14.3927 4.27658C14.2389 4.25318 14.0852 4.24148 13.9314 4.24148C13.5771 4.24148 13.2613 4.31669 12.9838 4.46709C12.7098 4.61416 12.4925 4.81971 12.3321 5.08376C12.1716 5.34447 12.0914 5.64194 12.0914 5.97618V10.6789H10.5924ZM19.054 10.8343C18.2953 10.8343 17.6419 10.6722 17.0937 10.348C16.5489 10.0205 16.1278 9.56088 15.8303 8.96928C15.5362 8.37433 15.3891 7.67745 15.3891 6.87862C15.3891 6.08982 15.5362 5.3946 15.8303 4.79297C16.1278 4.19135 16.5422 3.72174 17.0737 3.38416C17.6084 3.04658 18.2335 2.87779 18.9487 2.87779C19.3832 2.87779 19.8044 2.94965 20.2122 3.09337C20.6199 3.2371 20.9859 3.46271 21.3101 3.77021C21.6343 4.07771 21.89 4.47712 22.0772 4.96845C22.2644 5.45644 22.358 6.04971 22.358 6.74827V7.2797H16.2364V6.15666H20.889C20.889 5.76226 20.8088 5.41299 20.6483 5.10883C20.4879 4.80133 20.2623 4.55901 19.9715 4.38186C19.6841 4.20472 19.3465 4.11614 18.9588 4.11614C18.5376 4.11614 18.17 4.21976 17.8558 4.42698C17.5449 4.63087 17.3043 4.89826 17.1338 5.22915C16.9667 5.55671 16.8831 5.91267 16.8831 6.29704V7.17442C16.8831 7.68914 16.9734 8.127 17.1539 8.48797C17.3377 8.84895 17.5934 9.1247 17.921 9.31521C18.2485 9.50238 18.6312 9.59597 19.0691 9.59597C19.3532 9.59597 19.6122 9.55586 19.8462 9.47565C20.0801 9.39209 20.2823 9.26842 20.4528 9.10464C20.6233 8.94087 20.7536 8.73865 20.8439 8.498L22.2627 8.75369C22.1491 9.17149 21.9452 9.53748 21.651 9.85166C21.3603 10.1625 20.9943 10.4048 20.5531 10.5786C20.1152 10.7491 19.6155 10.8343 19.054 10.8343ZM26.904 10.8293C26.2823 10.8293 25.7275 10.6705 25.2395 10.353C24.7549 10.0322 24.3738 9.57592 24.0964 8.98432C23.8223 8.38937 23.6853 7.67578 23.6853 6.84352C23.6853 6.01127 23.824 5.29934 24.1014 4.70774C24.3822 4.11614 24.7666 3.66325 25.2545 3.34907C25.7425 3.03488 26.2957 2.87779 26.914 2.87779C27.392 2.87779 27.7764 2.95801 28.0672 3.11844C28.3613 3.27553 28.5886 3.45937 28.749 3.66994C28.9128 3.8805 29.0398 4.06601 29.13 4.22644H29.2203V0.411116H30.7193V10.6789H29.2554V9.48066H29.13C29.0398 9.64444 28.9094 9.83161 28.739 10.0422C28.5719 10.2527 28.3412 10.4366 28.0471 10.5937C27.753 10.7508 27.3719 10.8293 26.904 10.8293ZM27.2349 9.55085C27.6661 9.55085 28.0304 9.43721 28.3279 9.20993C28.6287 8.9793 28.856 8.66011 29.0097 8.25234C29.1668 7.84457 29.2453 7.36995 29.2453 6.82848C29.2453 6.2937 29.1685 5.82577 29.0147 5.42468C28.861 5.0236 28.6354 4.71109 28.3379 4.48715C28.0404 4.26321 27.6728 4.15124 27.2349 4.15124C26.7837 4.15124 26.4077 4.26822 26.1069 4.50219C25.806 4.73615 25.5788 5.05535 25.425 5.45978C25.2746 5.86421 25.1994 6.32044 25.1994 6.82848C25.1994 7.34321 25.2763 7.80613 25.43 8.21724C25.5838 8.62835 25.8111 8.95423 26.1119 9.19489C26.416 9.43219 26.7904 9.55085 27.2349 9.55085ZM32.8589 10.6789V2.97806H34.3579V10.6789H32.8589ZM33.6159 1.78985C33.3552 1.78985 33.1313 1.70295 32.9441 1.52914C32.7603 1.352 32.6684 1.14143 32.6684 0.897432C32.6684 0.650096 32.7603 0.439527 32.9441 0.265723C33.1313 0.0885769 33.3552 3.96712e-06 33.6159 3.96712e-06C33.8766 3.96712e-06 34.0989 0.0885769 34.2827 0.265723C34.4699 0.439527 34.5635 0.650096 34.5635 0.897432C34.5635 1.14143 34.4699 1.352 34.2827 1.52914C34.0989 1.70295 33.8766 1.78985 33.6159 1.78985ZM39.9694 2.97806V4.18132H35.763V2.97806H39.9694ZM36.891 1.13307H38.3901V8.41778C38.3901 8.70857 38.4335 8.9275 38.5204 9.07456C38.6073 9.21828 38.7193 9.31688 38.8564 9.37036C38.9967 9.4205 39.1488 9.44556 39.3126 9.44556C39.4329 9.44556 39.5382 9.43721 39.6284 9.4205C39.7187 9.40378 39.7889 9.39042 39.839 9.38039L40.1097 10.6187C40.0228 10.6522 39.8992 10.6856 39.7387 10.719C39.5783 10.7558 39.3778 10.7758 39.1371 10.7792C38.7427 10.7859 38.3751 10.7157 38.0341 10.5686C37.6932 10.4215 37.4175 10.1943 37.2069 9.88676C36.9963 9.57926 36.891 9.19321 36.891 8.72862V1.13307ZM47.2741 4.85815L45.9155 5.0988C45.8586 4.925 45.7684 4.75955 45.6447 4.60246C45.5244 4.44537 45.3606 4.31669 45.1534 4.21641C44.9462 4.11614 44.6871 4.06601 44.3763 4.06601C43.9518 4.06601 43.5975 4.16126 43.3134 4.35178C43.0293 4.53895 42.8873 4.78128 42.8873 5.07875C42.8873 5.33611 42.9825 5.54334 43.173 5.70043C43.3636 5.85752 43.671 5.9862 44.0955 6.08647L45.3188 6.36723C46.0274 6.53101 46.5555 6.78336 46.9031 7.12428C47.2507 7.46521 47.4245 7.90807 47.4245 8.45288C47.4245 8.91413 47.2908 9.32524 47.0235 9.68622C46.7594 10.0439 46.3901 10.3246 45.9155 10.5285C45.4442 10.7324 44.8977 10.8343 44.276 10.8343C43.4137 10.8343 42.7101 10.6505 42.1653 10.2828C41.6205 9.91183 41.2863 9.3854 41.1626 8.70356L42.6115 8.48296C42.7018 8.86065 42.8873 9.14642 43.168 9.34028C43.4488 9.5308 43.8148 9.62605 44.266 9.62605C44.7573 9.62605 45.1501 9.52411 45.4442 9.32023C45.7383 9.113 45.8854 8.86065 45.8854 8.56318C45.8854 8.32253 45.7951 8.12031 45.6146 7.95654C45.4375 7.79276 45.1651 7.66909 44.7974 7.58553L43.4939 7.29976C42.7753 7.13598 42.2439 6.87528 41.8996 6.51764C41.5587 6.16001 41.3882 5.70711 41.3882 5.15896C41.3882 4.7044 41.5152 4.30666 41.7692 3.96574C42.0233 3.62481 42.3742 3.35909 42.8221 3.16858C43.27 2.97472 43.783 2.87779 44.3613 2.87779C45.1935 2.87779 45.8486 3.05828 46.3266 3.41926C46.8045 3.77689 47.1204 4.25652 47.2741 4.85815ZM50.0604 10.7742C49.7863 10.7742 49.5507 10.6772 49.3535 10.4834C49.1563 10.2862 49.0577 10.0489 49.0577 9.77145C49.0577 9.49737 49.1563 9.2634 49.3535 9.06955C49.5507 8.87235 49.7863 8.77375 50.0604 8.77375C50.3345 8.77375 50.5701 8.87235 50.7673 9.06955C50.9645 9.2634 51.0631 9.49737 51.0631 9.77145C51.0631 9.95528 51.0163 10.1241 50.9228 10.2778C50.8325 10.4282 50.7122 10.5485 50.5618 10.6388C50.4114 10.729 50.2443 10.7742 50.0604 10.7742ZM50.0604 5.16899C49.7863 5.16899 49.5507 5.07039 49.3535 4.87319C49.1563 4.67599 49.0577 4.44035 49.0577 4.16628C49.0577 3.8922 49.1563 3.65824 49.3535 3.46438C49.5507 3.26718 49.7863 3.16858 50.0604 3.16858C50.3345 3.16858 50.5701 3.26718 50.7673 3.46438C50.9645 3.65824 51.0631 3.8922 51.0631 4.16628C51.0631 4.35011 51.0163 4.5189 50.9228 4.67265C50.8325 4.82306 50.7122 4.94338 50.5618 5.03363C50.4114 5.12387 50.2443 5.16899 50.0604 5.16899Z"
        fill="white"
      />
      <path
        d="M60.0474 10.8193C59.379 10.8193 58.7807 10.6939 58.2526 10.4433C57.7245 10.1892 57.305 9.84164 56.9942 9.40044C56.6867 8.95925 56.5229 8.45455 56.5029 7.88635H58.3077C58.3412 8.30748 58.5233 8.65175 58.8542 8.91914C59.1851 9.18319 59.5829 9.31521 60.0474 9.31521C60.4118 9.31521 60.736 9.23165 61.0201 9.06453C61.3042 8.89741 61.5281 8.66512 61.6919 8.36765C61.8557 8.07018 61.9359 7.73092 61.9325 7.34989C61.9359 6.96218 61.854 6.61791 61.6869 6.3171C61.5198 6.01628 61.2908 5.78065 61 5.61019C60.7092 5.43638 60.375 5.34948 59.9973 5.34948C59.6898 5.34614 59.3873 5.40296 59.0899 5.51994C58.7924 5.63692 58.5567 5.79067 58.3829 5.98119L56.7034 5.70544L57.2399 0.411116H63.196V1.96532H58.779L58.4832 4.68769H58.5434C58.7339 4.46375 59.003 4.27825 59.3506 4.13118C59.6982 3.98078 60.0792 3.90557 60.4937 3.90557C61.1153 3.90557 61.6702 4.05264 62.1582 4.34677C62.6461 4.63755 63.0305 5.03864 63.3113 5.55002C63.592 6.06141 63.7324 6.64632 63.7324 7.30477C63.7324 7.98327 63.5753 8.58824 63.2611 9.11968C62.9503 9.64778 62.5175 10.0639 61.9626 10.3681C61.4111 10.6689 60.7727 10.8193 60.0474 10.8193ZM75.4867 0.411116H77.3468V7.11927C77.3468 7.85459 77.173 8.50134 76.8254 9.05952C76.4811 9.6177 75.9964 10.0539 75.3714 10.3681C74.7464 10.6789 74.0161 10.8343 73.1805 10.8343C72.3416 10.8343 71.6096 10.6789 70.9845 10.3681C70.3595 10.0539 69.8749 9.6177 69.5306 9.05952C69.1863 8.50134 69.0142 7.85459 69.0142 7.11927V0.411116H70.8742V6.96385C70.8742 7.39167 70.9678 7.7727 71.155 8.10694C71.3455 8.44118 71.6129 8.70356 71.9572 8.89407C72.3014 9.08125 72.7092 9.17483 73.1805 9.17483C73.6518 9.17483 74.0595 9.08125 74.4038 8.89407C74.7514 8.70356 75.0188 8.44118 75.206 8.10694C75.3931 7.7727 75.4867 7.39167 75.4867 6.96385V0.411116ZM84.9486 3.23375C84.9018 2.7959 84.7046 2.45498 84.357 2.21099C84.0127 1.96699 83.5648 1.845 83.0133 1.845C82.6256 1.845 82.2931 1.90349 82.0156 2.02047C81.7382 2.13745 81.526 2.29622 81.3789 2.49676C81.2319 2.6973 81.1567 2.92626 81.1533 3.18362C81.1533 3.39753 81.2018 3.58303 81.2987 3.74013C81.399 3.89722 81.5343 4.03091 81.7048 4.14121C81.8753 4.24817 82.0641 4.33841 82.2713 4.41194C82.4786 4.48548 82.6875 4.54731 82.898 4.59745L83.8606 4.8381C84.2484 4.92834 84.621 5.05034 84.9787 5.20409C85.3396 5.35784 85.6622 5.55169 85.9463 5.78566C86.2337 6.01963 86.461 6.30206 86.6281 6.63295C86.7952 6.96385 86.8788 7.35156 86.8788 7.7961C86.8788 8.39773 86.7251 8.9275 86.4176 9.3854C86.1101 9.83997 85.6655 10.1959 85.0839 10.4533C84.5057 10.7073 83.8055 10.8343 82.9833 10.8343C82.1844 10.8343 81.4909 10.7107 80.9026 10.4633C80.3177 10.216 79.8598 9.85501 79.5289 9.38039C79.2014 8.90577 79.0242 8.32754 78.9975 7.64569H80.8274C80.8542 8.00333 80.9645 8.3008 81.1583 8.53811C81.3522 8.77542 81.6045 8.95256 81.9154 9.06955C82.2296 9.18653 82.5805 9.24502 82.9682 9.24502C83.3727 9.24502 83.7269 9.18486 84.0311 9.06453C84.3386 8.94087 84.5792 8.7704 84.7531 8.55315C84.9269 8.33255 85.0154 8.07519 85.0188 7.78106C85.0154 7.51367 84.9369 7.29307 84.7831 7.11927C84.6294 6.94212 84.4138 6.79506 84.1364 6.67808C83.8623 6.55775 83.5414 6.45079 83.1738 6.35721L82.0056 6.05639C81.16 5.83914 80.4915 5.50991 80.0002 5.06872C79.5122 4.62418 79.2682 4.03425 79.2682 3.29893C79.2682 2.69396 79.432 2.16419 79.7595 1.70963C80.0904 1.25507 80.54 0.902446 81.1082 0.651767C81.6764 0.397747 82.3198 0.270736 83.0384 0.270736C83.7671 0.270736 84.4054 0.397747 84.9536 0.651767C85.5051 0.902446 85.9379 1.25172 86.2521 1.6996C86.5663 2.14414 86.7284 2.65552 86.7384 3.23375H84.9486ZM92.0165 10.6789H88.537V0.411116H92.0866C93.1061 0.411116 93.9818 0.616673 94.7138 1.02779C95.4491 1.43556 96.0139 2.02214 96.4083 2.78755C96.8027 3.55295 96.9999 4.46876 96.9999 5.53498C96.9999 6.60454 96.8011 7.5237 96.4033 8.29244C96.0089 9.06119 95.4391 9.65112 94.6937 10.0622C93.9517 10.4733 93.0593 10.6789 92.0165 10.6789ZM90.3971 9.06955H91.9262C92.6415 9.06955 93.2381 8.93919 93.7161 8.67849C94.194 8.41444 94.5533 8.02171 94.794 7.5003C95.0346 6.97555 95.155 6.32044 95.155 5.53498C95.155 4.74952 95.0346 4.09776 94.794 3.57969C94.5533 3.05828 94.1974 2.66889 93.7261 2.41153C93.2582 2.15082 92.6766 2.02047 91.9814 2.02047H90.3971V9.06955Z"
        fill="#19FB9B"
      />
    </svg>
  );
};
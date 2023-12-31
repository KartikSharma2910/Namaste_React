import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SupportIcon from "@mui/icons-material/Support";
import LunchDiningIcon from "@mui/icons-material/LunchDining";

export const headerLogo = <LunchDiningIcon />;
export const headerData = [
  {
    icon: <SearchIcon />,
    label: "Search",
  },
  {
    icon: <LocalOfferOutlinedIcon />,
    label: "Offers",
  },
  {
    icon: <SupportIcon />,
    label: "Help",
  },
  {
    icon: <PersonOutlineOutlinedIcon />,
    label: "Sign In",
  },
  {
    icon: <ShoppingCartOutlinedIcon />,
    label: "Cart",
  },
];

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.sidebar-toggle {
  position: relative;
  display: flex;
  top: 7rem;
  left: 1rem;
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--black);
  transition: var(--transition);
  cursor: pointer;
  position: fixed;
  z-index: 1030;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 10px;
}

/*
=============== 
Sidebar
===============
*/
.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}
.close-btn {
  font-size: 2.5rem;
  background: transparent;
  border-color: transparent;
  color: var(--green);
  transition: var(--transition);
  cursor: pointer;
  margin-top: 3vw;
}

   .close-btn span {
      color: #fff;
      font-size: 1.5rem;
      margin-left: 1rem;
      font-family: TheSansMedium;
   }

.sidebar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
  row-gap: 1rem;
  transition: var(--transition);
  transform: translate(-100%);
  z-index: 1000000;
  position: fixed;
}
.show-sidebar {
  transform: translate(0);
}

@media (min-width: 2000px) {
   .sidebar-toggle {
    position: inherit;
   }
}

@media (max-width: 768px) {
   .sidebar-toggle {
    top: 7rem;
   }
}

@media (max-width: 425px) {
   .sidebar-toggle {
    top: 6rem;
    left: 0.5rem;
   }
}

@media screen and (min-width: 320px) {
  .sidebar {
    width: 85%;
  }
}
@media screen and (min-width: 676px) {
  .sidebar {
    width: 66%;
  }
}
@media screen and (min-width: 1024px) {
  .sidebar {
    width: 45%;
  }
}

`;

export default GlobalStyles;

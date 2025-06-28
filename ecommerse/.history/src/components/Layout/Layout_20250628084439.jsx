import styles from './styles.layout.scss'

function MainLayout({ children }) {

  const { wrapLayout, container}

  return (
    <main>
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;

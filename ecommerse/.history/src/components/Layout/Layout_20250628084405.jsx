import styles from './styles.layout.scss'

function MainLayout({ children }) {
  return (
    <main>
      <div>{children}</div>
    </main>
  );
}

export default MainLayout;

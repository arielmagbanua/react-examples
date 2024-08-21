import useNavigation from "../hooks/use-navigation";

function Route({path, children}) {
  const {currentPath} = useNavigation();

  console.log(currentPath);

  if (path === currentPath) {
    return children;
  }

  return null;
}

export default Route;
// Импортируем базовый набор компонентов темы
import MDXComponents from '@theme-original/MDXComponents';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default {
  // Наследуем стандартные компоненты (ссылки, изображения, заголовки)
  ...MDXComponents,
  // Регистрируем вкладки глобально
  Tabs,
  TabItem,
};
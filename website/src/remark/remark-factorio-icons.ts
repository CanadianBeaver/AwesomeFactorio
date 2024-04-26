import { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import path from 'path';

const IconNames: string[] = [
  'Accumulator',
  'Advanced circuit',
  'Advanced oil processing',
  'Assembling machine 1',
  'Assembling machine 2',
  'Assembling machine 3',
  'Arithmetic combinator',
  'Automation science pack',
  'Automobilism',
  'Basic oil processing',
  'Battery',
  'Battery research',
  'Beacon',
  'Big electric pole',
  'Blueprint',
  'Boiler',
  'Burner inserter',
  'Burner mining drill',
  'Car',
  'Cargo wagon',
  'Centrifuge',
  'Chemical plant',
  'Chemical science pack',
  'Cliff explosives',
  'Circuit network',
  'Coal liquefaction',
  'Coal',
  'Constant combinator',
  'Copper cable',
  'Copper ore',
  'Copper plate',
  'Crude oil resource',
  'Crude oil',
  'Decider combinator',
  'Electric energy distribution 1',
  'Electric energy distribution 2',
  'Efficiency module',
  'Efficiency module 2',
  'Efficiency module 3',
  'Electric furnace',
  'Electric mining drill',
  'Electronic circuit',
  'Electric energy accumulators',
  'Engine unit',
  'Engine',
  'Fast inserter',
  'Fluid wagon',
  'Gun turret',
  'Heat boiler',
  'Heat exchanger',
  'Heat pipe',
  'Heavy oil cracking',
  'Heavy oil',
  'Inserter capacity bonus',
  'Inserter',
  'Iron chest',
  'Iron gear wheel',
  'Iron ore',
  'Iron plate',
  'Kovarex enrichment process',
  'Lab',
  'Laser turret',
  'Landfill',
  'Light oil cracking',
  'Light oil',
  'Locomotive',
  'Logistics',
  'Logistics 2',
  'Logistics 3',
  'Logistic science pack',
  'Long-handed inserter',
  'Lubricant',
  'Medium electric pole',
  'Mining productivity',
  'Nuclear fuel',
  'Nuclear reactor',
  'Nuclear power',
  'Offshore pump',
  'Oil refinery',
  'Oil processing',
  'Petroleum gas',
  'Personal roboport',
  'Pipe to ground',
  'Pipe',
  'Plastic bar',
  'Empty barrel',
  'Fill sulfuric acid barrel',
  'Fill sulfuric acid barrel',
  'Power switch',
  'Processing unit',
  'Production science pack',
  'Productivity module',
  'Productivity module 2',
  'Productivity module 3',
  'Pump',
  'Pumpjack',
  'Radar',
  'Rail chain signal',
  'Rail signal',
  'Rail',
  'Repair pack',
  'Roboport',
  'Robotics',
  'Rocket fuel',
  'Satellite',
  'Small electric pole',
  'Small lamp',
  'Solar energy',
  'Solar panel',
  'Solid fuel from heavy oil',
  'Solid fuel from light oil',
  'Solid fuel from petroleum gas',
  'Solid fuel',
  'Stack inserter',
  'Biter',
  'Spitter',
  'Steam engine',
  'Steam turbine',
  'Steam',
  'Steel axe',
  'Steel chest',
  'Steel furnace',
  'Steel plate',
  'Stone brick',
  'Stone furnace',
  'Stone',
  'Storage tank',
  'Substation',
  'Sulfuric acid',
  'Speed module',
  'Speed module 2',
  'Speed module 3',
  'Spidertron',
  'Tank',
  'Toolbelt',
  'Train stop',
  'Transport belt',
  'Uranium fuel cell',
  'Uranium ore',
  'Uranium-235',
  'Uranium-238',
  'Utility science pack',
  'Wall',
  'Water',
  'Wood',
  'Express transport belt',
  'Fast transport belt',
  'Underground belt',
  'Fast underground belt',
  'Express underground belt',
  'Splitter',
  'Fast splitter',
  'Express splitter',
  'Logistic robot',
  'Construction robot',
  'Signal 0',
  'Signal 1',
  'Signal 2',
  'Signal 3',
  'Signal 4',
  'Signal 5',
  'Signal 6',
  'Signal 7',
  'Signal 8',
  'Signal 9',
  'Green wire',
  'Red wire'
];

interface Options {
  // Add any options here if needed
}

const plugin: Plugin<[Options]> = (options) => {
  async function transformer(tree: any, vfile: any) {

    const visited = new Set();

    function checkNode(node: any): boolean {
      if (visited.has(node) || node.type !== "inlineCode" || !node.value) return false;
      let search = node.value;
      if (search.startsWith('!')) search = search.substring(1);
      return IconNames.includes(search);
    }

    visit(tree, checkNode, (node, index: any, parent) => {

      if (!parent) return;
      visited.add(node);

      if (index > 0 && parent.children[index - 1].type === 'emphasis' && parent.children[index - 1].children.length > 0 && parent.children[index - 1].children[0].type === 'image') return;
      if (index > 1 && parent.children[index - 1].type === 'text' && parent.children[index - 1].value === ' ' && parent.children[index - 2].type === 'emphasis' && parent.children[index - 2].children.length > 0 && parent.children[index - 2].children[0].type === 'image') return;

      let deleteNode = node.value.startsWith('!') ? 1 : 0;
      let iconName = node.value;
      if (deleteNode == 1) iconName = iconName.substring(1);
      let rootDir = path.relative(vfile.dirname, 'factorio_icons');
      let iconUrl = `${rootDir}/${iconName.toLowerCase().replace(/ /g, "-")}.png`;

      let iconNode = {
        type: "emphasis",
        children: [
          {
            type: "image",
            alt: iconName,
            url: iconUrl
          }
        ]
      };

      let spaceNode = {
        type: "text",
        value: " "
      };

      parent.children.splice(index, deleteNode, iconNode, spaceNode);
    });
  }
  return transformer;
}

export default plugin;

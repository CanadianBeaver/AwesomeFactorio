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
  'Crude pil',
  'Decider combinator',
  'Electric energy distribution 1',
  'Electric energy distribution 2',
  'Efficiency module 2',
  'Efficiency module',
  'Electric furnace',
  'Electric mining drill',
  'Electronic circuit',
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
  'Power switch',
  'Processing unit',
  'Production science pack',
  'Productivity module',
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
  'Spidertron',
  'Tank',
  'Train stop',
  'Transport belt',
  'Uranium fuel cell',
  'Uranium ore',
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
  'Construction robot'
];

interface Options {
  // Add any options here if needed
}

const plugin: Plugin<[Options]> = (options) => {
  async function transformer(tree, vfile) {

    const visited = new Set();

    function checkNode(node): boolean {
      if (visited.has(node) || node.type !== "inlineCode" || !node.value) return false;
      return IconNames.includes(node.value);
    }

    visit(tree, checkNode, (node, index, parent) => {

      if (!parent) return;
      visited.add(node);

      if (index > 0 && parent.children[index - 1].type === 'emphasis' && parent.children[index - 1].children.length > 0 && parent.children[index - 1].children[0].type === 'image') return;
      if (index > 1 && parent.children[index - 1].type === 'text' && parent.children[index - 1].value === ' ' && parent.children[index - 2].type === 'emphasis' && parent.children[index - 2].children.length > 0 && parent.children[index - 2].children[0].type === 'image') return;

      let iconName = node.value;
      let rootDir = path.relative(vfile.dirname, '../docs/_icons');
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

      parent.children.splice(index, 0, iconNode, spaceNode);
    });
  }
  return transformer;
}

export default plugin;
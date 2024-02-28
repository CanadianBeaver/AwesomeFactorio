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
  'Basic oil processing',
  'Beacon',
  'Big electric pole',
  'Boiler',
  'Burner inserter',
  'Burner mining drill',
  'Car',
  'Cargo wagon',
  'Centrifuge',
  'Chemical plant',
  'Chemical science pack',
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
  'Efficiency module 2',
  'Efficiency module',
  'Electric furnace',
  'Electric mining drill',
  'Electronic circuit',
  'Fast inserter',
  'Fluid wagon',
  'Gun turret',
  'Heat boiler',
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
  'Light oil cracking',
  'Light oil',
  'Locomotive',
  'Logistic science pack',
  'Long-handed inserter',
  'Lubricant',
  'Medium electric pole',
  'Nuclear fuel',
  'Nuclear reactor',
  'Offshore pump',
  'Oil refinery',
  'Petroleum gas',
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
  'Rocket fuel',
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
  'Train stop',
  'Transport belt',
  'Uranium fuel cell',
  'Uranium ore',
  'Utility science pack',
  'Wall',
  'Water',
  'Express transport belt',
  'Fast transport belt',
  'Underground belt',
  'Fast underground belt',
  'Express underground belt',
  'Splitter',
  'Fast splitter',
  'Express splitter',
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

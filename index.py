import xml.etree.ElementTree as ET

tree = ET.parse("./test/$metadata.xml")
root = tree.getroot()

typedef = '''/**
 * @typedef {string} Edm.String
 * @typedef {boolean} Edm.Boolean
 * @typedef {{type:string}} __metadata
 * @typedef {string} Edm.DateTimeOffset
 * @typedef {string} Edm.DateTime
 * @typedef {string} Edm.Guid
 * @typedef {string} Edm.Decimal
 * @typedef {{content:string,__metadata:__metadata}} c4codata.ENCRYPTED_LONG_Name 
 * @typedef {{content:string,__metadata:__metadata}} c4codata.EXTENDED_Name
 */

'''


def getComplexTypes():
    return root.iter("{http://schemas.microsoft.com/ado/2008/09/edm}EntityType")


end = "export default {"

with open("./output.js", "w") as file:
    file.write(typedef)
    for t in root.iter("{http://schemas.microsoft.com/ado/2008/09/edm}EntityType"):
        name = t.attrib["Name"]
        file.write("export class " + name + " {\n")
        end += "\n  " + name + ","
        for p in t.getchildren():
            if not (p.tag.endswith("Key") or p.tag.endswith("NavigationProperty")):
                p_name = p.attrib["Name"]
                p_type = p.attrib["Type"]
                file.write(
                    "\n  /**\n   * @type {" + p_type + "} \n   *\n   * @memberof " + name + "\n   */\n  " + p_name + "\n")
        file.write("}\n\n")
    file.write(end)
    file.write("\n};\n")

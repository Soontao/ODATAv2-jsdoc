import xml.etree.ElementTree as ET
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

tree = ET.parse("./test/$metadata.xml")
root = tree.getroot()

typedef = '''/**
 * @typedef {string} Edm.String
 * @typedef {string} Edm.Binary
 * @typedef {boolean} Edm.Boolean
 * @typedef {{type:string}} __metadata
 * @typedef {string} Edm.DateTimeOffset
 * @typedef {string} Edm.DateTime
 * @typedef {string} Edm.Guid
 * @typedef {string} Edm.Decimal
 * @typedef {{content:string,__metadata:__metadata}} c4codata.ENCRYPTED_LONG_Name
 * @typedef {{content:string,__metadata:__metadata}} c4codata.EXTENDED_Name
 */

export class C4CODataType {}

'''


def getComplexTypes():
    return root.iter("{http://schemas.microsoft.com/ado/2008/09/edm}EntityType")


end = "export default {"

with open("./output.js", "w") as file:
    file.write(typedef)
    for t in root.iter("{http://schemas.microsoft.com/ado/2008/09/edm}EntityType"):
        name = t.attrib["Name"]
        file.write("export class " + name + " extends C4CODataType {\n")
        end += "\n  " + name + ","
        for p in t.getchildren():
            if not p.tag.endswith("Key"):
                if p.tag.endswith("NavigationProperty"):
                    p_name = p.attrib["Name"]
                    p_type = p.attrib["ToRole"]
                    file.write("\n  /**\n   * @type {" + p_type + "|" + p_type + "[]} \n   * @memberof " + name + "\n   */\n  " + p_name + "\n")
                else:
                    p_name = p.attrib["Name"]
                    p_type = p.attrib["Type"]
                    p_label = p.attrib["{http://www.sap.com/Protocols/SAPData}label"]
                    file.write("\n  /**\n   * @description " + p_label + \
                               "\n   * @type {" + p_type + "} \n   * @memberof " + name + "\n   */\n  " + p_name + "\n")
        file.write("}\n\n")
    for t in root.iter("{http://schemas.microsoft.com/ado/2008/09/edm}FunctionImport"):
        f_name = t.attrib['Name']
        f_return = t.attrib['ReturnType']
        file.write("\n/**\n * @returns {"+f_return.split('.')[1][:-1]+"[]}\n */\n")
        file.write("export function "+ f_name + "() { };\n")
    file.write("\n")
    file.write(end)
    file.write("\n};\n")

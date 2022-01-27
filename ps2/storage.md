---
title: PS2 Storage Methods
layout: page
---

If you have modded your PS2 to support loading in games and applications, then you will need some form of storage to put these on. With the PS2 there is a massive range of solutions to tailor for your needs.

For all storage methods, we will be covering using **Open PS2 Loader** (OPL). If you wish to see instructions for other loaders, please comment down below!

## USB sucks

The first solution you might think of is to jam a big ol’ USB stick into the front USB ports and have at it. While this _does_ work, the ports operate on USB 1 speeds. Basically, these ports are actually _slower_ than the PS2’s disc drive. Therefore we absolutely **do not recommend USB** as a storage medium for your games – although OPL does support doing so.

## Hard Drive (Original PS2)

If you have a PS2 network adapter, then you might’ve been left confused by the massive open gap in the expansion bay. This is because the regular network adapter has an IDE hard drive connector, which was designed to work with PS2 Linux, as well as a few games.

While this bay was restricted in use (you couldn’t even store saved games on it), the modder community was able to pass the functionality over to the user. This is by far the **best non-network storage method** available.

The connector for this drive is **IDE**, which predates SATA and PCIe drives. While these can be easily converted to SATA by conventional means, the drive space is perfectly sized for a 3.5″ drive, so you might have trouble fitting the drive in. The approaches would be:

* Purchase a used 3.5″ IDE HDD from eBay, and hope it isn’t dead.
* Buy or convert a PS2 network adapter to SATA.
* Buy a 3.5″ IDE to 2.5″ SATA HDD, and put some makeshift spacers in.
* Convert IDE to (micro)SD (recommended).

For all storage methods, you will also need a **Windows PC** and a **method of connecting storage to said PC**, so that the drive can be pre-formatted and readied for use.

**Pros**

* Storage is localised (not network dependent).
* Automatically detected by loaders.
* Super-fast game access (limited by drive used).

**Cons**

* Only available for **Original/Phat PS2**.
* Requires an **official PS2 network adapter**.

### Preparing the Storage Medium

The PS2 has a bespoke drive format that is recommended to use to get the best possible drive effectiveness. We cover formatting a drive for the PS2 using **WinHIIP** in another guide, please check it out!

<div class="text-center">
	<p class="rt-button"><a href="{% link ps2/freehdboot-tutorial.md %}#winhiip">WinHIIP Usage</a></p>
</div>

### 3.5″ IDE/(P)ATA Hard Drive

If you’re lucky enough to have a fully-functional regular drive, then you don’t have to change anything. Once formatted, this drive will happily slot into the PS2 Network Adapter, and then fit snug into the drive bay.

### 2.5″ SATA Hard Drive

If however you do not have a 3.5″ IDE, then a 2.5″ SATA can be converted for use. You will need a **male IDE to Female SATA** adapter, and some way to prop the drive up inside the recess so that it does not strain either the Network IDE or the adapter SATA under the weight.

### (Micro)SD Card

Storage solutions can be converted to support other mediums nowadays, and this is especially true with the IDE connector. An option you have is to convert the IDE to an SD card, and use your PS2 like a cartridge console.

To do this you need.

* 3.5″ IDE to 2.5″ IDE adapter.
* 2.5″ IDE to SD Card adapter.
* SD card extension slot (optional).

![](https://revive.today/wp-content/uploads/2018/11/IMG_20180823_171903-1024x576.jpg)
{: .article-image }

![](https://revive.today/wp-content/uploads/2018/11/IMG_20180823_172157-e1581028248691-1024x1005.jpg)
{: .article-image }

![Top of the PlayStation 2 showing the extended SD card enclosure, with an SD card in.](https://revive.today/wp-content/uploads/2018/11/IMG_20180823_172719-e1542574534675-1024x770.jpg)
{: .article-image }

Connect these all up, and you your PS2 will treat the SD card as it would a regular drive. WinHIIP (mentioned in the link above) should see your SD card in a regular SD to USB adapter, so it should be easy to format the SD card to the PS2.

With an extender you could put the card slot on top of the PS2 to allow for easy changing of SD cards. You can take it a step further with a MicroSD adapter, and open up more storage avenues.

## Network Storage

If you have a slim or newer PS2, then unfortunately you are unable to use a hard drive with your console. You still need a network adapter if you have an original PS2 to use this method.

Most popular game loaders support running games over your local network. In this method, instead of the console reading data from an internal drive, it streams the game files over your network.

**Pros**

* Hard drive not required.
* No additional hardware needed (exc. original PS2).
* Supports **all moddable PS2** models.

**Cons**

* Fast **internal** network required.
* **Ethernet** only, Wi-Fi isn’t available.
* Network disruption will cause a crash.
* Fiddly network setup.

### Network Storage / NAS

#### Setting up the NAS

Something, somewhere on your network must be capable of allowing the PS2 access to storage over the network to access the games you want. This could be a NAS, a USB drive plugged into a router with file-sharing abilities, or simply a PC that’s booted while the PS2 is on.

Also, the PS2 came from the years when WiFi was only just coming into fruition, so there are no WiFi capabilities. This also includes USB WiFi adapters, so you will need to **ethernet-connect** your PS2 to a router or a switch.

Create a folder called ‘**PS2SMB**‘. In this PS2SMB folder, create ‘CD’ and ‘DVD’ folders. Once OPL hooks into the storage, so long as permissions are correct it will generate the rest of the required folder structure. Game ISOs below 700mb in size go in CD, and the rest go in DVD.

![A screenshot of Windows 10 File Browser inside a folder called 'PS2SMB' with the folders 'CD' and 'DVD' inside.](https://revive.today/wp-content/uploads/2020/02/2020-02-21.png)
{: .article-image }

Start off with something like this.

Right click on the PS2SMB folder and click on **Properties**. Navigate to the **Sharing** tab and click on **Advanced Sharing**. Enable **Share this folder**, and set **Everyone** to full permission in **Permissions**.

![](https://revive.today/wp-content/uploads/2020/02/2020-02-21-3.png)
{: .article-image }

#### Set NAS/PC to a static IP address

For OPL to see your new shared folder, OPL must be pointed to your PC. By default, your home network will dynamically assign IP addresses to new devices on your network. Kept like this, you would need to frequently re-point OPL to your PC after every reboot. To fix this, a static IP address can be assigned to your PC.

##### Router Side

You will need **admin access to your router**, or more technically whatever device issues out IP addresses (DHCP). You will need to dig out the manual for your router, if you don’t already know how to use the admin interface on your router.

For most broadband supplied routers, once logged in you should be able to see a list of devices connected to your router. Once you have found your PC, You should have an option that says something close to “always keep this IP address”. Once set, the IP address of that network device will be used for your OPL configuration later.

##### PC Side

Instead, you can configure Windows to ask for a specific IP address instead. This is **not recommended** as if the IP address has already been leased out, you will cause a network issue where network traffic will go to the wrong device.

Pop open the Windows Start/Search and type **Network Connections**. Right click on your adapter that you use, and click **Properties**. Find the entry in the list for **IPv4** and click **Properties**.

Now this configuration takes some know-how. Open a **command prompt/powershell** window (right click start menu), type **ipconfig** and press enter. The adapter you are editing should show up. Set to **use the following IP address** and copy the info (IP and subnet mask) into the boxes provided. Give google a load to check your internet still works. If it’s all good, your PC should now ask for that IP address on each reboot.

#### Setting up OPL (PS2)

On your PS2, run OPL. In Network Settings you can input the IP and subnet mask gained from the steps above to connect your PS2 up to the network share.

Once OPL has been correctly configured, the ‘**ETH**‘ page on OPL should now display a list of all the games stored on the network. If it doesn’t work, check the following things:

* Is the NAS/PC turned on?
* Can you access the folder from another network machine (e.g. laptop)?
* Is the account credentials provided to OPL correct?
* Check your router page. Is the PS2 appearing on the network?

Run through the above steps and the problem should get routed out. Otherwise, drop a comment down below, as someone might’ve experienced the same problems.

## Recommended Choice

While native storage is the best option on paper, the ReviveToday recommends the **Network Storage** method for **all softmod PS2’s**. This method opens you up to the most storage choices and sizes, and is most supported due to it being the only option for slim PS2s.

Either option, don’t just _settle_ for USB – experience the true power the PS2 has to offer.

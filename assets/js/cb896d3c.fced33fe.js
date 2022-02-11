"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[303],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var r=a.createContext({}),h=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=h(e.components);return a.createElement(r.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=h(n),m=i,d=u["".concat(r,".").concat(m)]||u[m]||c[m]||s;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,l=new Array(s);l[0]=u;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var h=2;h<s;h++)l[h]=n[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6593:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return r},metadata:function(){return h},toc:function(){return p},default:function(){return u}});var a=n(7462),i=n(3366),s=(n(7294),n(3905)),l=["components"],o={sidebar_position:1},r="How to create custom HashMaps in Java",h={unversionedId:"ds-and-system/intro",id:"ds-and-system/intro",title:"How to create custom HashMaps in Java",description:"Concepts to understand",source:"@site/docs/ds-and-system/intro.md",sourceDirName:"ds-and-system",slug:"/ds-and-system/intro",permalink:"/docs/ds-and-system/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ds-and-system/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"intro",permalink:"/docs/intro"}},p=[{value:"Concepts to understand",id:"concepts-to-understand",children:[{value:"Generics in Java",id:"generics-in-java",children:[],level:3},{value:"What is hashtable",id:"what-is-hashtable",children:[],level:3},{value:"What is hashcode and hash function",id:"what-is-hashcode-and-hash-function",children:[],level:3},{value:"What is buckets in hashmaps",id:"what-is-buckets-in-hashmaps",children:[],level:3},{value:"What is hash collision",id:"what-is-hash-collision",children:[],level:3},{value:"Implementation of custom hashmaps",id:"implementation-of-custom-hashmaps",children:[],level:3},{value:"Performance of HashMap",id:"performance-of-hashmap",children:[{value:"Validation of search time complexity",id:"validation-of-search-time-complexity",children:[{value:"Hashmap has 200 elements",id:"hashmap-has-200-elements",children:[],level:5},{value:"Hashmap has 2M elements",id:"hashmap-has-2m-elements",children:[],level:5}],level:4}],level:3}],level:2}],c={toc:p};function u(e){var t=e.components,o=(0,i.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"how-to-create-custom-hashmaps-in-java"},"How to create custom HashMaps in Java"),(0,s.kt)("h2",{id:"concepts-to-understand"},"Concepts to understand"),(0,s.kt)("p",null,"To implement the custom HashMaps, you should have the understanding of the following topics. "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Understanding of ",(0,s.kt)("inlineCode",{parentName:"li"},"Generics")," in java"),(0,s.kt)("li",{parentName:"ol"},"Understanding of the Hashmaps concepts like ",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"What is ",(0,s.kt)("inlineCode",{parentName:"li"},"hashcode")," "),(0,s.kt)("li",{parentName:"ol"},"What is ",(0,s.kt)("inlineCode",{parentName:"li"},"hash table")),(0,s.kt)("li",{parentName:"ol"},"What are ",(0,s.kt)("inlineCode",{parentName:"li"},"buckets")," in hashtable"),(0,s.kt)("li",{parentName:"ol"},"What is ",(0,s.kt)("inlineCode",{parentName:"li"},"hash collision"),".")))),(0,s.kt)("p",null,"Let's get started"),(0,s.kt)("h3",{id:"generics-in-java"},"Generics in Java"),(0,s.kt)("p",null,"Generics in java are the classes or interfaces which are parameterized over types. It means that instead of specifying the\ntype of the class or interface at the time of implementation, let ",(0,s.kt)("inlineCode",{parentName:"p"},"caller")," create the object of desired type. "),(0,s.kt)("p",null,"For example - Fixed Type object is ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<Integer>"),", while generic type is ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<E>")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<?>"),".\nIf the type is fixed like ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<Integer>")," then I can not create the object of ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList")," which can hold ",(0,s.kt)("inlineCode",{parentName:"p"},"string")," values. "),(0,s.kt)("p",null,"While in the case of ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<?>")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList<E>"),", I can create object of ",(0,s.kt)("inlineCode",{parentName:"p"},"MyArrayList")," which can hold items of different types like\n",(0,s.kt)("inlineCode",{parentName:"p"},"Integer")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"String")," or anything else like this ",(0,s.kt)("inlineCode",{parentName:"p"},"new MyArrayList<Integer>()"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"new MyArrayList<String>()"),". "),(0,s.kt)("h3",{id:"what-is-hashtable"},"What is hashtable"),(0,s.kt)("p",null,"Below is the architecture of the hashtable where resolutions of the collision are resolved by open hashing",(0,s.kt)("br",{parentName:"p"}),"\n",(0,s.kt)("img",{alt:"img.png",src:n(7105).Z,width:"869",height:"481"})),(0,s.kt)("p",null,"Hashtable consist of "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Hash function which take the key and do some calculations to generate the hashcode "),(0,s.kt)("li",{parentName:"ol"},"Hashcode, it is the output of the hash function for a given key"),(0,s.kt)("li",{parentName:"ol"},"Bucket, it is the index of the ",(0,s.kt)("inlineCode",{parentName:"li"},"ArrayList")," where this key is supposed to be stored. Bucket is calculated by ",(0,s.kt)("inlineCode",{parentName:"li"},"hashCode % ArrayList.size()")," "),(0,s.kt)("li",{parentName:"ol"},"LinkedList, it is associated with every bucket, it is used to resolve hash collision i.e the cases where two or more keyvalues need to be stored in the same bucket.")),(0,s.kt)("h3",{id:"what-is-hashcode-and-hash-function"},"What is hashcode and hash function"),(0,s.kt)("p",null,"Hashcode is the integer value which is returned by a hasCode function. This hashcode function, do some kind of complex calculation\non the object( it could be integer, string, or any other object ). The most noticeable feature of this hashcode is - it will remain same for the given object,\nhowmany times you run ",(0,s.kt)("inlineCode",{parentName:"p"},"hashcode")," function on that object. This hashcode unique for a given string. In some cases, if two different objects\nhave the same ",(0,s.kt)("inlineCode",{parentName:"p"},"hashcode"),", it is known as hashcode collision. "),(0,s.kt)("p",null,"A quick example of hashCode function could be "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Hash{\n    public void hashCode( int i, long l){\n        int result = 1;\n        int result = 31 * result + i;\n        int result = 31 * result + (l & l >>> 32);\n        return result;\n    }\n}\n\n")),(0,s.kt)("h3",{id:"what-is-buckets-in-hashmaps"},"What is buckets in hashmaps"),(0,s.kt)("p",null,"Buckets in the hashmap are usually implemented by ",(0,s.kt)("inlineCode",{parentName:"p"},"ArrayList"),". It is because once we get the bucket number in which particular key is present\nwe need to get it in O(1) operation, it is possible only by getting key by index.\nIn most of the implementation, while initializing the hashmap, bucket list of default size is created like below"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class HashTable{\n   LinkedList<Map<K,V>> ll = new LinkedList<Map<K,V>>();\n   ArrayList<ll> hashTable = new ArrayList<ll>();    \n}\n")),(0,s.kt)("h3",{id:"what-is-hash-collision"},"What is hash collision"),(0,s.kt)("p",null,"Hash collision is the situation when two or more keys fall in the same bucket. Hash collision happen in the following cases"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"When a hash function generate same hashcode for two different keys"),(0,s.kt)("li",{parentName:"ol"},"When a hash function generate two different keys BUT when we do ",(0,s.kt)("inlineCode",{parentName:"li"},"hashCode % ArrayList.size()")," then we get the same bucket. ")),(0,s.kt)("h3",{id:"implementation-of-custom-hashmaps"},"Implementation of custom hashmaps"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'\nimport java.util.*;\n\npublic class MyHashMap<K, V>{\n\n    final static int INIT_CAPACITY = 1000;\n\n    ArrayList<LinkedList<HashMap<K, V>>> hashTable = new ArrayList<>();\n\n    public MyHashMap(){\n            createHashTable(this.hashTable);\n    }\n\n    private void createHashTable(ArrayList<LinkedList<HashMap<K, V>>> hashTable){\n\n        for(int i = 0; i < MyHashMap.INIT_CAPACITY; i++){\n            LinkedList<HashMap<K,V>> ll = new LinkedList<>();\n            hashTable.add(ll);\n        }\n    }\n\n    public void put(K key, V value){\n\n        int hashCode = Math.abs(key.hashCode());\n        int bucket = hashCode % hashTable.size();\n\n        LinkedList<HashMap<K,V>> ll = hashTable.get(bucket);\n\n        HashMap<K,V> keyValue = new HashMap<>();\n        keyValue.put(key, value);\n        ll.add(keyValue);\n    }\n\n    public V get(K key){\n\n        boolean isFound = false;\n        V value = null;\n        int hashCode = Math.abs(key.hashCode());\n        int bucket = hashCode % hashTable.size();\n\n        LinkedList<HashMap<K,V>> ll = hashTable.get(bucket);\n\n        for (HashMap<K, V> keyValue : ll) {\n            for(HashMap.Entry<K, V> entry: keyValue.entrySet()){\n                if(entry.getKey().equals(key)){\n                    value = entry.getValue();\n                    isFound = true;\n                }\n            }\n            if (isFound) break;\n        }\n        return value;\n    }\n\n    public void displayHashTable(){\n\n        for (int i=0; i<hashTable.size(); i++){\n            LinkedList<HashMap<K,V>> ll = hashTable.get(i);\n            Iterator<HashMap<K,V>> it = ll.iterator();\n\n            System.out.println("Bucket is " + i);\n            while(it.hasNext()){\n                System.out.println(it.next());\n            }\n        }\n    }\n\n    public static void main(String args[]){\n\n        MyHashMap<Integer, Integer> myHashMap = new MyHashMap<>();\n\n        for(int i=0; i<2000000; i++){\n            myHashMap.put(i, i);\n        }\n        myHashMap.displayHashTable();\n\n        Object v = myHashMap.get(908);\n        System.out.println(v);\n\n        v = myHashMap.get(1);\n        System.out.println(v);\n\n        v = myHashMap.get(1000);\n        System.out.println(v);\n\n\n        System.out.println(v);\n        System.out.println(v);\n\n    }\n}\n\n\n')),(0,s.kt)("h3",{id:"performance-of-hashmap"},"Performance of HashMap"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Disclaimer")," : For all performance related stuff, I use JProfiler extensively. You can get it from ",(0,s.kt)("a",{parentName:"p",href:"https://www.ej-technologies.com/products/jprofiler/overview.html"},"Get JProfiler")),(0,s.kt)("p",null,"Time complexity of the search and delete of the hashmap is usually O(1) i.e. it should not increase with the increase in the number of elements.\nBasically if you see the steps being taken to search a key say ",(0,s.kt)("inlineCode",{parentName:"p"},"KEY")," are "),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Create the hash of ",(0,s.kt)("inlineCode",{parentName:"li"},"KEY")," say ",(0,s.kt)("inlineCode",{parentName:"li"},"hashcode")),(0,s.kt)("li",{parentName:"ol"},"Calculate modulus of ",(0,s.kt)("inlineCode",{parentName:"li"},"hashcode % number of buckets")," say ",(0,s.kt)("inlineCode",{parentName:"li"},"bucketId")),(0,s.kt)("li",{parentName:"ol"},"Access the bucket with index i.e ",(0,s.kt)("inlineCode",{parentName:"li"},"bucketId")),(0,s.kt)("li",{parentName:"ol"},"Search for the elements in the linkedList present in the ",(0,s.kt)("inlineCode",{parentName:"li"},"bucketid"),(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"If there are no collisions then LinkedList would contain just one key value pair"),(0,s.kt)("li",{parentName:"ol"},"If there are multiple collisions then LinkedList might contain multiple elements ",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Like I said earlier also, collision are bound to happen ",(0,s.kt)("ol",{parentName:"li"},(0,s.kt)("li",{parentName:"ol"},"Collision based on same hash value for two different keys "),(0,s.kt)("li",{parentName:"ol"},"Collision because of limitation on number of buckets, hence two or more keys even with different hashcode need to reside in same bucket")))))))),(0,s.kt)("h4",{id:"validation-of-search-time-complexity"},"Validation of search time complexity"),(0,s.kt)("h5",{id:"hashmap-has-200-elements"},"Hashmap has 200 elements"),(0,s.kt)("p",null,"Bucket Size : 1000 "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Test{\n   public static void main(String args[]) {\n\n      MyHashMap<Integer, Integer> myHashMap = new MyHashMap<>();\n\n      for (int i = 0; i < 200; i++) {\n         myHashMap.put(i, i);\n      }\n      myHashMap.displayHashTable();\n\n      Object v = myHashMap.get(100);\n      System.out.println(v);\n   }    \n}\n\n        \n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output")),(0,s.kt)("p",null,"Time taken to get a element from 200 elements is approx 300 micro secs "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img_1.png",src:n(248).Z,width:"1288",height:"723"})),(0,s.kt)("h5",{id:"hashmap-has-2m-elements"},"Hashmap has 2M elements"),(0,s.kt)("p",null,"Bucket Size : 1000"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"class Test{\n   public static void main(String args[]) {\n\n      MyHashMap<Integer, Integer> myHashMap = new MyHashMap<>();\n\n      for (int i = 0; i < 2000000; i++) {\n         myHashMap.put(i, i);\n      }\n      myHashMap.displayHashTable();\n\n      Object v = myHashMap.get(100);\n      System.out.println(v);\n   }    \n}\n\n        \n\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Outout")),(0,s.kt)("p",null,"Time taken to get a element from 2M elements is approx 600 micro secs. You might be wondering why there is a jump of even 300 micro seconds when searching for a element in 2M elements.\nReason for this is the constant bucket size. If you take a look at the first use case, we have bucket size of 1000, while in this case also the bucket size is same, hence in this case we would have\nmore collisions ( due to hashCode % num of buckets ), then more toward linear search. "),(0,s.kt)("p",null,"Generally, we should increase the number of buckets dynamically as more and more keys are getting inserted. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"img_2.png",src:n(8243).Z,width:"1385",height:"698"})))}u.isMDXComponent=!0},7105:function(e,t,n){t.Z=n.p+"assets/images/img-8d70f691777aae4451024c24032c623b.png"},248:function(e,t,n){t.Z=n.p+"assets/images/img_1-de8c6e4e41d648ebfad9a2b7fe8090de.png"},8243:function(e,t,n){t.Z=n.p+"assets/images/img_2-419e66d8b25e511a6cc4ee9b36aafb0a.png"}}]);
import React from 'react'

// export const OrderUserCard = () => {
//     return (
//         <View style={styles.containerCard}>
//           {/* Client Data */}
//           {
//               !isBusiness ? 
//                 <View style={{ marginBottom: 20 }}>
//                     <Text style={styles.fontInfoBold}>
//                     Codigo de pedido:
//                         <Text style={{ color: 'green', fontSize: 20 }}> #{order?.hash}</Text>
//                     </Text>
//                     <Text style={styles.fontInfoBold}>
//                     Cliente:
//                         <Text style={{ fontWeight: 'normal', fontSize: 20 }}> {order?.client}</Text>
//                     </Text>
//                     <Text style={styles.fontInfoBold}>
//                     Cliente:
//                         <Text style={{ fontWeight: 'normal', fontSize: 20 }}> {order?.client}</Text>
//                     </Text>
//                 </View>
//                 :
//                 <View style={{ marginBottom: 20 }}>
//                     <Text style={styles.fontInfoBold}>
//                     Codigo de pedido:
//                     <Text style={{ color: 'green', fontSize: 20 }}> #{order?.hash}</Text>
//                     </Text>
//                     <Text style={styles.fontInfoBold}>
//                     Cliente:
//                     <Text style={{ fontWeight: 'normal', fontSize: 20 }}> {order?.client}</Text>
//                     </Text>
//                 </View>
//           }
    
//           {/* Products Ordered */}
//           <View>
//             {order && order.order?.map((product, index) => <ProductOrdered key={index} product={product} />)}
//             <Text style={{ alignSelf: 'flex-end', marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#333333' }}>
//               Total a pagar: <Text style={{ color: 'green', fontWeight: 'normal' }}>${total}</Text>
//             </Text>
    
//             {/* Option Buttons */}
//             {
//               !isBusiness ?
//                 <View style={styles.containerButtons}>
//                   <OrderCompBtn type={"Llamar tienda"} color={false} Action={() => callclient()} />
//                   <OrderCompBtn type={"Cancelar orden"} color={'cancel'} Action={() => eraseOrder(order.hash)} />              
//                 </View>
//                 :
//                 <>
//                   <View style={styles.containerButtons}>
//                     <OrderCompBtn type={"Contactar cliente"} color={false} Action={() => callclient()} />
//                     <OrderCompBtn type={"Opciones de orden"} color={true} Action={() => OpenOptions()} />
//                   </View>
//                   <OrdersInProgressModal id={orderIndex} modal={modalStatus} funct={setModalStatus} orders={orders} />
//                 </>
//             }
//           </View>
//         </View>
//       )
// }
